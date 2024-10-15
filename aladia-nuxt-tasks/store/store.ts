import { defineStore } from "pinia";

interface AppState {
  isLoading: boolean;
  googleSignInLoading: boolean;
  pageNumber: number;
  currentEmail: string;
  currentName: string;
  currentSurName: string;
  accounts: string[];  
}

export const useAppState = defineStore("appState", {
  state: (): AppState => {
    return { isLoading: false, pageNumber: 0, accounts: ['accout@gmail.com'], currentEmail: "", currentName: "", currentSurName: "", googleSignInLoading: false };
  },
  actions: {
    setLoading(value: boolean) {
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
    },
  },
});
