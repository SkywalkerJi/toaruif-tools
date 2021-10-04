export default [
  {
    id: 1,
    name: "RE-45 AUTO",
    class: "Pistol",
    damage: {
      head: 18,
      body: 12,
      leg: 11,
    },
    Mag: {
      lv0: 16,
      lv1: 19,
      lv2: 22,
      lv3: 25,
    },
    Heirloom: 0,
    projectileSpeed: 19500,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 78,
      },
    ],
    ammo: "Light Rounds",
  },
  {
    id: 2,
    name: "P2020",
    class: "Pistol",
    damage: {
      head: 27,
      body: 18,
      leg: 16,
    },
    Mag: {
      lv0: 14,
      lv1: 16,
      lv2: 18,
      lv3: 21,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 163,
      },
    ],
    ammo: "Light Rounds",
  },
  {
    id: 3,
    name: "Wingman Revolver",
    class: "Pistol",
    damage: {
      head: 97,
      body: 45,
      leg: 41,
    },
    Mag: {
      lv0: 6,
      lv1: 7,
      lv2: 8,
      lv3: 9,
    },
    Heirloom: 0,
    projectileSpeed:18000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 390,
      },
    ],
    ammo: "Light",
  },
  {
    id: 4,
    name: "R-99 SMG",
    class: "SMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 57,
      },
    ],
    ammo: "Light",
  },
  {
    id: 5,
    name: "Alternator",
    class: "SMG",
    damage: {
      head: 22,
      body: 16,
      leg: 0,
    },
    special: {
      disruptorRounds: true,
      specialDamage: {
        head: 30,
        body: 22,
        leg: 0,
      },
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 1,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 101,
      },
    ],
    ammo: "Supply Drop",
  },
  {
    id: 6,
    name: "Volt",
    class: "SMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 82,
      },
    ],
    ammo: "Energy",
  },
  {
    id: 7,
    name: "Prowler x5",
    class: "SMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Burst",
        timeBetweenShots: 192,
        burstDelay: 242,
      },
    ],
    ammo: "Light",
  },
  {
    id: 8,
    name: "Hemlock x3",
    class: "Burst Weapon",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Burst",
        timeBetweenShots: 125,
        burstDelay: 284,
      },
    ],
    ammo: "Light",
  },
  {
    id: 9,
    name: "Hemlock Semi Auto",
    class: "Semi Auto",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 157,
      },
    ],
    ammo: "Light",
  },
  {
    id: 10,
    name: "30-30 Repeater",
    class: "Semi Auto",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 433,
      },
    ],
    ammo: "Heavy Rounds",
  },
  {
    id: 11,
    name: "Triple Take",
    class: "Semi Auto",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 775,
      },
    ],
    ammo: "Heavy Rounds",
  },
  {
    id: 12,
    name: "Bocek Bow",
    class: "Semi Auto",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Bow",
        timeBetweenShots: 560,
        burstDelay: 317,
      },
    ],
    ammo: "Heavy Rounds",
  },
  {
    id: 13,
    name: "G7 Scout",
    class: "Semi Auto",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Single",
        timeBetweenShots: 256,
      },
    ],
    ammo: "Light Rounds",
  },
  {
    id: 14,
    name: "Havoc Rifle",
    class: "Assault Rifle",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 90,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 15,
    name: "R-301",
    class: "Assault Rifle",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 73,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 16,
    name: "VK-47 Flatline",
    class: "Assault Rifle",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 96,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 17,
    name: "M600 Spitfire",
    class: "LMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 1,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 110,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 18,
    name: "Rampage",
    class: "LMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 1,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 200,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 18,
    name: "Rampage Overclocked",
    class: "LMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 158,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 19,
    name: "L-Star",
    class: "LMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 101,
      },
    ],
    ammo: "Energy Ammo",
  },
  {
    id: 20,
    name: "Devotion (Max RPM)",
    class: "LMG",
    damage: {
      head: 0,
      body: 0,
      leg: 0,
    },
    Mag: {
      lv0: 24,
      lv1: 24,
      lv2: 24,
      lv3: 24,
    },
    Heirloom: 0,
    projectileSpeed: 32000,
    modes: [
      {
        fireModes: "Auto",
        timeBetweenShots: 67,
      },
    ],
    ammo: "Energy Ammo",
  },
];
