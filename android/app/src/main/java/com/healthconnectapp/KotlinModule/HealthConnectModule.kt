package com.healthconnectapp;

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class HealthConnectModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "HealthConnectModule"
    }

    @ReactMethod
    fun CustomeFun(callback: Callback) {
        callback.invoke(null, "Sachin")
    }
}

