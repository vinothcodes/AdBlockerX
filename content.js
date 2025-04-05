// List of ad selectors for various platforms
const adSelectors = [
    // YouTube
    'div.ytp-ad-player-overlay',
    'div.ytp-ad-progress-bar',
    'div.ytp-ad-skip-button',
    'div.ytp-ad-overlay-slot',
    'div.video-ads',
  
    // Vimeo
    'div.ad-container',
    'div.ad-clip',
    'div.vimeo-ad-overlay',
  
    // Dailymotion
    'div.dailymotion-ad',
    'div.video-ad-container',
    'div.advertisement',
  
    // Twitch
    'div.ads-container',
    'div.ad-banner',
    'div.ad-overlay',
  
    // SoundCloud
    'div.sc-ad',
    'div.sc-audio-ad',
  
    // Spotify (for web player)
    'div.spk-player-ad-container',
    'div.spk-ad-container',
  
    // MixCloud
    'div.ad-slot',
    'div.ad-overlay',
  
    // Vice (for videos)
    'div.vc-ad',
    'div.vc-ad-wrapper'
  ];
  
  // Function to remove ad elements
  function removeAds() {
    adSelectors.forEach(selector => {
      const adElement = document.querySelector(selector);
      if (adElement) {
        adElement.remove();
      }
    });
  }
  
  // Run the ad removal function every 2 seconds
  setInterval(removeAds, 2000);
  
  // Additional strategy: block iframe-based ads that may be embedded in the video player
  const adFrameSelectors = [
    'iframe[src*="ads"]',  // Common pattern for iframe-based ads
    'iframe[src*="googleads"]', // Google Ads
    'iframe[src*="ad.doubleclick"]' // DoubleClick Ads
  ];
  
  // Block iframes that might be ads
  setInterval(() => {
    adFrameSelectors.forEach(selector => {
      const adIframe = document.querySelector(selector);
      if (adIframe) {
        adIframe.remove();
      }
    });
  }, 2000);
  