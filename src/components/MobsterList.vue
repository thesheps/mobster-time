<template>
  <v-list>
    <v-subheader class="display-1 mb-4 mt-4">Mobsters</v-subheader>

    <v-list-tile>
      <v-text-field
        class="title"
        v-on:keyup.enter="addMobster"
        v-model="name"
        placeholder="Add a new Mobster (at least 2)..."
        autofocus
        label="Mobster name"
      ></v-text-field>
    </v-list-tile>

    <draggable v-model="mobsters" handle=".handle">
      <transition-group type="transition" name="flip-fade">
        <v-list-tile
          v-for="(mobster, index) in mobsters"
          :key="mobster.id"
          avatar
          class="mt-4 dragger"
        >
          <v-list-tile-action class="handle">
            <v-icon large>drag_indicator</v-icon>
          </v-list-tile-action>

          <v-list-tile-action @click="setDriver(index)">
            <v-btn large icon ripple>
              <v-icon large :color="isDriving(index)">drive_eta</v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-action @click="mobster.showCamera = true">
            <v-btn icon ripple>
              <v-icon large>camera_enhance</v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-avatar size="50" @click="toggleAvatar(index)">
            <transition name="flip-fade" mode="out-in">
              <img :key="mobster.avatar" :src="mobster.photo ? mobster.photo : mobster.avatar">
            </transition>
          </v-list-tile-avatar>

          <v-list-tile-content class="ml-4">
            <v-list-tile-title v-text="mobster.name"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action @click="removeMobster(index)">
            <v-btn icon ripple>
              <v-icon large color="grey lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>

          <Camera
            :showCamera="mobster.showCamera"
            v-model="mobster.photo"
            @close="mobster.showCamera = false"
          ></Camera>
        </v-list-tile>
      </transition-group>
    </draggable>

    <v-snackbar v-model="showError" top>
      {{ errorText }}
      <v-btn color="pink" flat @click="showError = false">Close</v-btn>
    </v-snackbar>

    <v-dialog v-model="showBreakDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Time to take a break!</v-card-title>
        <v-card-text>Well done Mobsters, now go and recharge your batteries!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="showBreakDialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import eventBus from "../../src/utils/event-bus";
import notificationService from "../../src/utils/notification-service";
import Camera from "./Camera";

export default {
  components: {
    draggable,
    Camera
  },

  data: () => ({
    name: "",
    mobsters: [],
    errorText: "",
    showError: false,
    showBreakDialog: false,
    currentDriver: 0
  }),

  mounted() {
    const self = this;

    eventBus.$on("rotateMobster", () => {
      self.rotateDriver();

      if (!self.mobsters || self.mobsters.length === 0) return;

      notificationService.raiseNotification(
        "Time to rotate!",
        self.mobsters[self.currentDriver].avatar,
        `Take the wheel, ${self.mobsters[self.currentDriver].name}!`
      );
    });

    eventBus.$on("takeABreak", () => {
      self.showBreakDialog = true;
      self.rotateDriver();

      notificationService.raiseNotification(
        "Break time!",
        "img/icons/coffee.png",
        "Step away from the keyboard!"
      );
    });

    eventBus.$on("timerTick", timeRemaining => {
      if (self.mobsters.length > 0 && self.mobsters[self.currentDriver]) {
        document.title = `${
          self.mobsters[self.currentDriver].name
        } - ${timeRemaining}`;
      } else {
        document.title = "Mobster";
      }
    });
  },

  methods: {
    isDriving(index) {
      return index === this.currentDriver ? "pink" : "grey";
    },

    addMobster() {
      if (!this.name) {
        this.errorText = "Please enter a mobster name!";
        this.showError = true;
        return;
      }

      this.mobsters.push({
        id: this.mobsters.length,
        name: this.name,
        avatar: this.getAvatar(),
        showCamera: false
      });

      this.name = "";
      this.$emit("input", this.mobsters);
    },

    removeMobster(index) {
      this.$delete(this.mobsters, index);
      this.$emit("input", this.mobsters);
    },

    setDriver(index) {
      this.currentDriver = index;
    },

    rotateDriver() {
      if (this.currentDriver === this.mobsters.length - 1) {
        this.currentDriver = 0;
      } else {
        this.currentDriver++;
      }
    },

    toggleAvatar(index) {
      let mobster = this.mobsters[index];
      let avatar = this.getAvatar();

      while (avatar === mobster.avatar) {
        avatar = this.getAvatar();
      }

      mobster.avatar = avatar;
      this.$set(this.mobsters, index, mobster);
    },

    getAvatar() {
      return `img/avatars/${Math.floor(Math.random() * 9) + 1}.jpg`;
    }
  }
};
</script>

<style>
.flip-fade-move {
  transition: transform 0.5s;
}

.flip-fade-enter-active,
.flip-fade-leave-active {
  transition: opacity 0.2s;
}

.flip-fade-enter,
.flip-fade-leave-to {
  opacity: 0;
}

.handle {
  cursor: pointer;
}
</style>
