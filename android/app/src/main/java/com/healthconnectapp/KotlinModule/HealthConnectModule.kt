package com.healthconnectapp.KotlinModule;

import android.content.Intent
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.HeartRateRecord
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

    @ReactMethod
    fun requestPermissions() {
      val intent = Intent(reactApplicationContext, PermissionActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        intent.putExtra("extra_key", "extra_value")
        reactApplicationContext.startActivity(intent)
    }
}

