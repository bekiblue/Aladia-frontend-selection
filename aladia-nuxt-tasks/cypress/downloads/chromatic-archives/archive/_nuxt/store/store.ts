import { defineStore } from "/_nuxt/node_modules/.cache/vite/client/deps/pinia.js?v=923360b9";
export const useAppState = defineStore("appState", {
  state: () => {
    return { isLoading: false, pageNumber: 0, accounts: ["accout@gmail.com"], currentEmail: "", currentName: "", currentSurName: "", googleSignInLoading: false };
  },
  actions: {
    setLoading(value) {
      this.isLoading = value;
    },
    addAccount() {
      this.accounts.push(this.currentEmail);
    },
    showEmailField() {
      this.pageNumber = 0;
    },
    showPasswordField() {
      this.pageNumber = 1;
    },
    showPasswordRecoveryField() {
      this.pageNumber = 2;
    },
    showSignUpField() {
      this.pageNumber = 3;
    },
    showOTPField() {
      this.pageNumber = 4;
    },
    showPasswordSetField() {
      this.pageNumber = 5;
    },
    login() {
      this.pageNumber = -1;
    },
    logout() {
      this.pageNumber = 0;
    }
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5cbmludGVyZmFjZSBBcHBTdGF0ZSB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZ29vZ2xlU2lnbkluTG9hZGluZzogYm9vbGVhbjtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBjdXJyZW50RW1haWw6IHN0cmluZztcbiAgY3VycmVudE5hbWU6IHN0cmluZztcbiAgY3VycmVudFN1ck5hbWU6IHN0cmluZztcbiAgYWNjb3VudHM6IHN0cmluZ1tdOyAgXG59XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBTdGF0ZSA9IGRlZmluZVN0b3JlKFwiYXBwU3RhdGVcIiwge1xuICBzdGF0ZTogKCk6IEFwcFN0YXRlID0+IHtcbiAgICByZXR1cm4geyBpc0xvYWRpbmc6IGZhbHNlLCBwYWdlTnVtYmVyOiAwLCBhY2NvdW50czogWydhY2NvdXRAZ21haWwuY29tJ10sIGN1cnJlbnRFbWFpbDogXCJcIiwgY3VycmVudE5hbWU6IFwiXCIsIGN1cnJlbnRTdXJOYW1lOiBcIlwiLCBnb29nbGVTaWduSW5Mb2FkaW5nOiBmYWxzZSB9O1xuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgc2V0TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGFkZEFjY291bnQoKSB7XG4gICAgICB0aGlzLmFjY291bnRzLnB1c2godGhpcy5jdXJyZW50RW1haWwpO1xuICAgIH0sXG4gICAgc2hvd0VtYWlsRmllbGQoKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIH0sXG4gICAgc2hvd1Bhc3N3b3JkRmllbGQoKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgIH0sXG4gICAgc2hvd1Bhc3N3b3JkUmVjb3ZlcnlGaWVsZCgpIHtcbiAgICAgIHRoaXMucGFnZU51bWJlciA9IDI7XG4gICAgfSxcbiAgICBzaG93U2lnblVwRmllbGQoKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAzO1xuICAgIH0sXG4gICAgc2hvd09UUEZpZWxkKCkge1xuICAgICAgdGhpcy5wYWdlTnVtYmVyID0gNDtcbiAgICB9LFxuICAgIHNob3dQYXNzd29yZFNldEZpZWxkKCkge1xuICAgICAgdGhpcy5wYWdlTnVtYmVyID0gNTtcbiAgICB9LFxuICAgIGxvZ2luKCkge1xuICAgICAgdGhpcy5wYWdlTnVtYmVyID0gLTE7XG4gICAgfSxcbiAgICBsb2dvdXQoKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAwO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBbUI7QUFZckIsYUFBTSxjQUFjLFlBQVksWUFBWTtBQUFBLEVBQ2pELE9BQU8sTUFBZ0I7QUFDckIsV0FBTyxFQUFFLFdBQVcsT0FBTyxZQUFZLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsSUFBSSxhQUFhLElBQUksZ0JBQWdCLElBQUkscUJBQXFCLE1BQU07QUFBQSxFQUM5SjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVyxPQUFnQjtBQUN6QixXQUFLLFlBQVk7QUFBQSxJQUNuQjtBQUFBLElBQ0EsYUFBYTtBQUNYLFdBQUssU0FBUyxLQUFLLEtBQUssWUFBWTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxpQkFBaUI7QUFDZixXQUFLLGFBQWE7QUFBQSxJQUNwQjtBQUFBLElBQ0Esb0JBQW9CO0FBQ2xCLFdBQUssYUFBYTtBQUFBLElBQ3BCO0FBQUEsSUFDQSw0QkFBNEI7QUFDMUIsV0FBSyxhQUFhO0FBQUEsSUFDcEI7QUFBQSxJQUNBLGtCQUFrQjtBQUNoQixXQUFLLGFBQWE7QUFBQSxJQUNwQjtBQUFBLElBQ0EsZUFBZTtBQUNiLFdBQUssYUFBYTtBQUFBLElBQ3BCO0FBQUEsSUFDQSx1QkFBdUI7QUFDckIsV0FBSyxhQUFhO0FBQUEsSUFDcEI7QUFBQSxJQUNBLFFBQVE7QUFDTixXQUFLLGFBQWE7QUFBQSxJQUNwQjtBQUFBLElBQ0EsU0FBUztBQUNQLFdBQUssYUFBYTtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwibmFtZXMiOltdfQ==