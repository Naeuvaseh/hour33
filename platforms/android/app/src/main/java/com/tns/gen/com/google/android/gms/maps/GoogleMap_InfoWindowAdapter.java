package com.tns.gen.com.google.android.gms.maps;

public class GoogleMap_InfoWindowAdapter implements com.google.android.gms.maps.GoogleMap.InfoWindowAdapter {
	public GoogleMap_InfoWindowAdapter() {
		com.tns.Runtime.initInstance(this);
	}

	public android.view.View getInfoWindow(com.google.android.gms.maps.model.Marker param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (android.view.View)com.tns.Runtime.callJSMethod(this, "getInfoWindow", android.view.View.class, args);
	}

	public android.view.View getInfoContents(com.google.android.gms.maps.model.Marker param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (android.view.View)com.tns.Runtime.callJSMethod(this, "getInfoContents", android.view.View.class, args);
	}

}
