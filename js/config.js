const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'DuckDuckGO',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },


    {
      category: 'Geral',
      name: 'E-Mail',
      key: 'gm',
      url: 'https://mail.google.com/mail/u/0/#inbox',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #ff0000, #00ab12)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'Geral',
      name: 'Pinterest',
      key: 'pt',
      url: 'https://www.pinterest.pt',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #ff0000, #ffffff)',
      icon: 'pinterest',
      quickLaunch: false,
    },
    {
      category: 'Geral',
      name: 'Tradutor',
      key: 'tr',
      url: 'https://www.deepl.com/translator',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },


    {
      category: 'Programação',
      name: 'Diolinux Plus',
      key: 'dl',
      url: 'https://plus.diolinux.com.br/',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #0F65AC, #BD0AA1)',
      icon: 'dplus',
      quickLaunch: false,
    },
    {
      category: 'Programação',
      name: 'GitHub',
      key: 'gt',
      url: 'https://github.com/Matelios',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'github',
      quickLaunch: false,
    },
    {
      category: 'Programação',
      name: 'Stack Overflow',
      key: 'so',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #d6671f, #212121',
      icon: 'stackoverflow',
      quickLaunch: false,
    },
 

    {
      category: 'Streaming',
      name: 'YouTube',
      key: 'yt',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: true,
    },
    {
      category: 'Streaming',
      name: 'ESound',
      key: 'es',
      url: 'https://esound.app/app/library',
      search: '/search/{}',
      color: '#1ec60d',
      icon: 'esound',
      quickLaunch: false,
    },
    {
      category: 'Streaming',
      name: 'Neflix',
      key: 'nt',
      url: 'https://www.netflix.com/browse',
      search: '/directory/game/{}',
      color: '#BA0000',
      icon: 'netflix',
      quickLaunch: false,
    },


    {
      category: 'Social',
      name: 'Twitter',
      key: 'tt',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Social',
      name: 'Reddit',
      key: 'rt',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'Instagram',
      key: 'it',
      url: 'https://www.instagram.com/',
      color: 'linear-gradient(135deg, #C13584, #FCAF45',
      icon: 'instagram',
      quickLaunch: true,
    },


  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 0
    },
    {
      name: 'Default',
      limit: 0
    },
    {
      name: 'History',
      limit: 2
    },
    {
      name: 'DuckDuckGo',
      limit: 2
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {

  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
