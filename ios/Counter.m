//
//  Counter.m
//  Datepicker
//
//  Created by mac on 01/03/23.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter,NSObject)

RCT_EXTERN_METHOD(increment:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(off:(RCTResponseSenderBlock)callback)

@end

