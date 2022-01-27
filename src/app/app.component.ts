import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Firestore, collectionData, collection, DocumentData, doc, docData, setDoc, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getAuth, GoogleAuthProvider, signInWithRedirect, Auth } from "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advertising-creation';
  message = ''
  data: any

  constructor(
    private router: Router,
    private firestore: Firestore,
  ) { 
    router.events.subscribe(event => { 
      if (event instanceof NavigationStart) { 
        this.navigate(event)
      }
    })
  }

  navigate(event: any) { 
    this.message = event.url
  }

  access() { 
    collectionData(collection(this.firestore, 'people'))
      .subscribe((value) => { 
        this.data = value
      },
      error => { 
        this.message = "(can't get data...)"
        this.data = null
      });
  }

  login() { 
    let provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider).then((result) => {
      this.access()
    });
  }

  logout() { 
    const auth = getAuth();
    auth.signOut()
    this.access()
  }

  get currentUser() { 
    const auth = getAuth();
    return auth != null ?
      auth.currentUser != null ?
        auth.currentUser.displayName :
        '(not logined.)' : 
      '(not logined.)'
  }
}
