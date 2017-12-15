package com.tns.gen.jp.wasabeef.takt;

public class Audience implements jp.wasabeef.takt.Audience {
	public Audience() {
		com.tns.Runtime.initInstance(this);
	}

	public void heartbeat(double param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "heartbeat", void.class, args);
	}

}
