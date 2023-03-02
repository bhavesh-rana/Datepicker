//
//  Targetonoff.swift
//  Testfirst
//
//  Created by mac on 01/03/23.
//

import Foundation

@objc(Counter)
class Counter: NSObject{
  
  private var count = false;
  
  @objc
  func increment(_ callback:RCTResponseSenderBlock) {
    count = true;
    //print(count);
    callback([count])
  }
  @objc
  static func requiresMainQueueSetup() ->Bool{
    return true;
  }
  @objc
  func constantsToExport() -> [String: Any]!{
    return ["initialCount":0];
  }
  @objc
  func off(_ callback:RCTResponseSenderBlock) {
    count = false;
    //print(count);
    callback([count])
  }
}

