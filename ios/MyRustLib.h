#ifdef __cplusplus
#import "react-native-my-rust-lib.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNMyRustLibSpec.h"

@interface MyRustLib : NSObject <NativeMyRustLibSpec>
#else
#import <React/RCTBridgeModule.h>

@interface MyRustLib : NSObject <RCTBridgeModule>
#endif

@end
