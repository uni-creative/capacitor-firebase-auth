import Foundation
import Capacitor

import Firebase

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CAPFirebaseAuthPlugin)
public class CAPFirebaseAuthPlugin: CAPPlugin {
    private let implementation = CAPFirebaseAuth()
    
    public override func load(){
        
        print("LOADDDDDD")
        
        if (FirebaseApp.app() == nil) {
           FirebaseApp.configure()
       }
    }

    
    @objc func signIn(_ call: CAPPluginCall) {
        guard let providerId = call.options["providerId"] as? String else {
           call.reject("providerId must be provided")
           return
        }
        
        print("!!!!!!!!!!!!!")
        print("SignIn", providerId)
        

        call.resolve([
            "value": implementation.signIn(providerId: providerId)
        ])
    }
    
    @objc func signOut(_ call: CAPPluginCall) {
        
        call.resolve([
            "value": implementation.signOut()
        ])
    }
}
