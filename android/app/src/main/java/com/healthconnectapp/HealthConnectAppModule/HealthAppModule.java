package com.healthconnectapp.HealthConnectAppModule;

import android.content.Context;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HealthAppModule extends ReactContextBaseJavaModule {
    Context ctx;

    public HealthAppModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.ctx = reactContext.getApplicationContext();
    }

    @Override
    public String getName() {
        return "HealthAppModule";
    }
    @ReactMethod
    public void isPackageInstalled(String packageName, Callback cb) {
        PackageManager pm = this.ctx.getPackageManager();
        System.out.println("===>>>"+pm);
        try {
            pm.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            cb.invoke(true);
        } catch (Exception e) {
            System.out.println("===>>>00"+e);
            cb.invoke(false);
        }
    }
}