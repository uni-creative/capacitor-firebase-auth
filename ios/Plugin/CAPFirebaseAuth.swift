import Foundation


@objc public class CAPFirebaseAuth: NSObject {
    
    @objc public func signIn(providerId: String) -> String {
        print("signIn", providerId)
        
        return providerId
    }
    
    @objc public func signOut() -> Bool  {
        print("signOut")
        
        return true
    }
}
