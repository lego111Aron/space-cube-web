import { Injectable, inject, signal } from '@angular/core';
import { 
  Auth, 
  user,
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider,
  signOut,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  
  // Creates an observable of the user state
  user$ = user(this.auth);
  
  // Signal for easier consumption in templates if preferred, 
  // though user$ stream is standard for AngularFire
  currentUserSignal = signal<User | null>(null);

  constructor() {
    this.user$.subscribe(u => {
      this.currentUserSignal.set(u);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      // AngularFire handles the user state automatically.
      // Redirect or show success
      this.router.navigate(['/']);
      return result;
    } catch (error) {
      console.error('Google login error', error);
      throw error;
    }
  }

  async loginWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com');
    // Optional: Add scopes or custom parameters
    // provider.setCustomParameters({
    //   prompt: 'consent',
    //   tenant: 'common' // or specific tenant ID
    // });
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.router.navigate(['/']);
      return result;
    } catch (error) {
      console.error('Microsoft login error', error);
      throw error;
    }
  }

  async loginWithApple() {
    const provider = new OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    try {
      const result = await signInWithPopup(this.auth, provider);
      this.router.navigate(['/']);
      return result;
    } catch (error) {
      console.error('Apple login error', error);
      throw error;
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/']);
  }
}
