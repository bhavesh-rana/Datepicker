package com.datepicker;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Myfirstnativemodule extends ReactContextBaseJavaModule {

    public Myfirstnativemodule(ReactApplicationContext reactContext){
        super(reactContext);
    }
    @NonNull
    @Override
    public String getName() {
        return "xyz";
    }
    @ReactMethod
    public void  lightOn(int mode, Callback callback){
        try{
            Boolean light;
            if(mode==1){
                light = true;
            }else {
                light = false;
            }
            callback.invoke(null,light);

        }catch (Exception e){
            callback.invoke(e,null);

        }
    }

}
