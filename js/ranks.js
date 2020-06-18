var rankColors = {
    'ORG': '#0974fe',
    'CEO': '#FFD700',
    'Owner': 'white',
    'Staff': '#00f8ff',
    'Tier 7': '#3498db',
    'Tier 6': '#1abc9c',
    'Advisor': '#1abc9c',
    'Tier 5': '#e91e63',
};

var ranks = {
    'remember': { 
        name: 'Team Remember®',
        rank: 'ORG',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: 'https://www.youtube.com/channel/UCp1tD7Ee8pT_xL3uI67Qxow',
        twitch: 'https://www.twitch.tv/rememberclan',
        instagram: 'https://www.instagram.com/rememberclan/',
        tiktok: 'https://www.tiktok.com/@rememberclan',
        background: 'url(../img/rc-default/bg.png)'
    },
    'viral': { 
        name: 'viral',
        rank: 'CEO',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: 'https://www.youtube.com/channel/UCp1tD7Ee8pT_xL3uI67Qxow',
        twitch: 'https://www.twitch.tv/rememberclan',
        instagram: 'https://www.instagram.com/rm.viral/',
        tiktok: 'https://www.tiktok.com/@rememberclan',
        background: 'url(../img/rc-default/bg.png)'
    },
    'kad': { 
        name: 'kad',
        rank: 'Owner',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: 'https://www.youtube.com/channel/UCp1tD7Ee8pT_xL3uI67Qxow',
        twitch: 'https://www.twitch.tv/rememberclan',
        instagram: 'https://www.instagram.com/rm.kad/',
        tiktok: 'https://www.tiktok.com/@kadenels',
        background: 'url(../img/rc-default/bg.png)'
    },
    'stylez': { 
        name: 'STYLEZ ♆',
        rank: 'Owner',
        discord: 'https://discord.com/invite/6ekJGJh',
        youtube: 'https://www.youtube.com/serstylez',
        twitch: 'https://www.twitch.tv/serstylez',
        instagram: 'https://www.instagram.com/thebrandantyler/',
        tiktok: 'https://www.tiktok.com/@thebrandantyler',
        background: 'url(../img/rc-default/bg.png)'
    },
    'deacon': { 
        name: 'deacon',
        rank: 'Staff',
        discord: 'https://discord.gg/BYDmACR',
        youtube: 'https://www.youtube.com/channel/UC45QQL2hM3V5JbbqSib2blw',
        twitch: 'https://www.twitch.tv/0Deacon',
        instagram: 'https://www.instagram.com/rm.deacon/',
        tiktok: '',
        background: 'url(../players/rm.deacon/bg.jpg)'
    },
    'jax': { 
        name: 'jax',
        rank: 'Tier 6',
        discord: 'https://discord.gg/PHHanx',
        youtube: 'https://www.youtube.com/channel/UCWyR32xPznSGwwpuAkRX6gw',
        twitch: 'https://www.twitch.tv/jaxwtff',
        instagram: 'https://www.instagram.com/rm.jax/',
        tiktok: 'https://vm.tiktok.com/TXeu6L/',
        background: 'url(../img/rc-default/bg.png)'
    },
    'kylegorilla': { 
        name: 'kylegorilla',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/kylegorilla/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'spartan': { 
        name: 'spartan',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.spartan/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'amistrix': { 
        name: 'amistrix',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.amistrixs/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'sele': {
        name: 'sele',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/lyriqsele/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'blnx': {
        name: 'blnx',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/blnxedits/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'mvgtv': {
        name: 'mvgtv',
        rank: 'Tier 6',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.mvgtv/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'label': {
        name: 'labels',
        rank: 'Advisor',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.labels/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'assault': { 
        name: 'assault',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.assault/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'ben': { 
        name: 'ben',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.benn/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'snakey': { 
        name: 'snakey',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.snakey/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'stousy': { 
        name: 'stousy',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.stousy/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'darc': { 
        name: 'darc',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.darc/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'tsiji': { 
        name: 'tsiji',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.tsiji/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'axxuraxy': { 
        name: 'axxuraxy',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.axxuraxy/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'blues': { 
        name: 'blues',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.bluez/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'chunky': { 
        name: 'chunky',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rmchunky/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'kjay': { 
        name: 'kjay',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.kjay/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'marksman': { 
        name: 'marksman',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.marksman/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'mirko': { 
        name: 'mirko',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.mirko/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'pie': { 
        name: 'pie',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.pie/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'rollo': { 
        name: 'rollo',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.rollo/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'stamina': { 
        name: 'stamina',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rmstamina/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'swain': { 
        name: 'swain',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.swain/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'vitalz': { 
        name: 'vitalz',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.vitalz/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    '50k': { 
        name: '50k',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.50k_/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'jom': { 
        name: 'jom',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/rm.jom/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    },
    'siirvic': { 
        name: 'siirvic',
        rank: 'Tier 5',
        discord: 'https://discord.gg/5Kbj3gZ',
        youtube: '',
        twitch: '',
        instagram: 'https://www.instagram.com/siirvic/',
        tiktok: '',
        background: 'url(../img/rc-default/bg.png)'
    }
}
