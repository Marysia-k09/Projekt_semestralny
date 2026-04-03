let wyniki = {
wiosna_jasna:0,
wiosna_ciepla:0,
wiosna_czysta:0,

lato_jasne:0,
lato_chlodne:0,
lato_zgaszone:0,

jesien_zgaszona:0,
jesien_ciepla:0,
jesien_ciemna:0,

zima_czysta:0,
zima_chlodna:0,
zima_ciemna:0
};

const pytania = ["hair_child", "hair_now", "hair_light", "hair_sun", "hair_reflections", "eyes_color",
    "eyes_intensity", "eyes_extra", "eyes_ring", "eyes_type", "skin_color", "skin_sun",
    "undertone", "czerwienienie", 'piegi', "kolor_piegow", "kontrast_wlosy", "kontrast_oczy",
    "kontrast_makijaz", "brwi", "uroda", "oczy_wlosy", "skora_wlosy", "kol_natural",
    "nasycenie_urody", "oczy", "bialko", "uroda_bardziej", "twarz_bardziej", "charakter"
 ]

const punkty = {
    hair_child: {
        bardzo_jasny_blond: {wiosna_jasna: 2, wiosna_czysta: 1, lato_jasne: 2, lato_chlodne: 1},
        jasny_zloty_blond: {wiosna_jasna: 2, wiosna_ciepla: 2, wiosna_czysta: 1, jesien_ciepla: 1, jesien_zgaszona: 1},
        jasny_popielaty_blond: {lato_jasne: 2, lato_chlodne: 2, lato_zgaszone: 1, zima_chlodna: 1},
        ciemny_blond: {lato_chlodne: 1, lato_zgaszone: 2, jesien_zgaszona: 2, jesien_ciepla: 1},
        jasny_braz: {wiosna_ciepla: 1, lato_chlodne: 1, lato_zgaszone: 2, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna:1},
        sredni_braz: {wiosna_ciepla: 1, lato_zgaszone: 1, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna: 2, zima_ciemna:1},
        ciemny_braz: {lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 2, zima_chlodna: 1, zima_ciemna: 2},
        bardzo_ciemny_braz: {jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 2, zima_chlodna: 1, zima_ciemna: 2},
        czarny: {jesien_zgaszona: 1, jesien_ciemna: 1, zima_chlodna: 1, zima_ciemna: 2},
        rudy: {wiosna_jasna: 1, wiosna_ciepla: 1, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna: 1},
        miedziany: {wiosna_jasna: 1, wiosna_ciepla:2, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna:1}
    },

    hair_now: {
        bardzo_jasny_blond: {wiosna_jasna: 2, wiosna_czysta: 1, lato_jasne: 2, lato_chlodne: 1},
        jasny_zloty_blond: {wiosna_jasna: 2, wiosna_ciepla: 2, wiosna_czysta: 1, jesien_ciepla: 1, jesien_zgaszona: 1},
        jasny_popielaty_blond: {lato_jasne: 2, lato_chlodne: 2, lato_zgaszone: 1, zima_chlodna: 1},
        ciemny_blond: {lato_chlodne: 1, lato_zgaszone: 2, jesien_zgaszona: 2, jesien_ciepla: 1},
        jasny_braz: {wiosna_ciepla: 1, lato_chlodne: 1, lato_zgaszone: 2, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna:1},
        sredni_braz: {wiosna_ciepla: 1, lato_zgaszone: 1, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna: 2, zima_ciemna:1},
        ciemny_braz: {lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 2, zima_chlodna: 1, zima_ciemna: 2},
        bardzo_ciemny_braz: {jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 2, zima_chlodna: 1, zima_ciemna: 2},
        czarny: {jesien_zgaszona: 1, jesien_ciemna: 1, zima_chlodna: 1, zima_ciemna: 2},
        rudy: {wiosna_jasna: 1, wiosna_ciepla: 1, jesien_zgaszona: 2, jesien_ciepla: 2, jesien_ciemna: 1},
        miedziany: {wiosna_jasna: 1, wiosna_ciepla:2, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna:1}
    },

    hair_light: {
        zloty: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        miedziany: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        popielaty: {lato_jasne: 1, lato_chlodne: 2, lato_zgaszone: 1, zima_czysta: 1, zima_chlodna: 1},
        neutralne: {wiosna_jasna: 1, wiosna_ciepla: 1, wiosna_czysta: 1, lato_jasne: 1, lato_chlodne: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 1, zima_czysta: 1, zima_chlodna: 1, zima_ciemna: 1},
        ciemne: {lato_chlodne: 1, jesien_ciepla: 1, jesien_zgaszona: 1, jesien_ciemna: 2, zima_czysta: 1, zima_chlodna: 1, zima_ciemna: 2}
    },

    hair_sun: {
        jasnieja: {wiosna_jasna: 2, wiosna_ciepla: 1, wiosna_czysta: 1, lato_jasne: 2, lato_chlodne: 1, lato_zgaszone: 1},
        zlote: {wiosna_jasna: 1, wiosna_ciepla:2, wiosna_czysta: 1, jesien_zgaszona: 1, jesien_ciemna: 1, jesien_ciepla: 2},
        miedziane: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1}, 
        lekko_jasnieja: {wiosna_jasna: 1, wiosna_ciepla: 1, wiosna_czysta: 1, lato_jasne: 1, lato_chlodne: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 1},
        brak: {lato_chlodne: 1, lato_zgaszone:1, jesien_ciemna: 1, zima_czysta: 1, zima_chlodna: 2, zima_ciemna: 2}
    },

    hair_reflections: {
        zlote: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1, },
        miedziane: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        popielate: {lato_jasne: 1, lato_chlodne: 2, lato_zgaszone: 1, zima_czysta: 1, zima_chlodna:1},
        czerwone: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 2},
        brak: {wiosna_ciepla: 1, wiosna_czysta: 1, wiosna_jasna: 1, lato_chlodne:1, lato_jasne: 1, lato_zgaszone: 1, jesien_ciemna: 1, jesien_ciepla: 1, jesien_zgaszona: 1, zima_chlodna: 1, zima_ciemna:1, zima_czysta: 1}
    },

    eyes_color: {
        light_blue: {wiosna_jasna: 1, wiosna_czysta: 2, lato_jasne:2, lato_chlodne: 1, lato_zgaszone: 1, zima_czysta: 2, zima_chlodna: 1},
        dark_blue: {wiosna_czysta: 1, lato_chlodne: 1, lato_zgaszone: 1, zima_czysta: 2, zima_chlodna: 2, zima_ciemna: 1},
        steel_blue: {lato_jasne: 1, lato_chlodne: 2, lato_zgaszone: 2, zima_czysta: 1, zima_chlodna: 2, zima_ciemna: 1},
        gray: {lato_jasne: 1, lato_chlodne: 2, lato_zgaszone: 2, zima_czysta: 1, zima_chlodna: 2, zima_ciemna: 1},
        green: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        green_gray: {lato_jasne: 1, lato_chlodne: 1, lato_zgaszone: 2, jesien_zgaszona: 2, jesien_ciepla: 1},
        hazel: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 2},
        light_brown: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, lato_jasne: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        medium_brown: {wiosna_ciepla: 1, lato_chlodne: 1, lato_zgaszone: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 2, zima_ciemna: 1},
        dark_brown: {lato_chlodne: 1, jesien_zgaszona: 1, jesien_ciepla: 1, jesien_ciemna: 2, zima_czysta: 1, zima_chlodna: 1, zima_ciemna: 2},
        black: {jesien_ciemna: 1, zima_czysta: 2, zima_chlodna: 2, zima_ciemna: 2}
    },

    eyes_intensity: {
    very_light: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        zima_czysta: 1
    },
    light: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 2,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_ciepla: 1,
        zima_czysta: 1
    },
    medium: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    dark: {
        lato_chlodne: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 2
    },
    very_dark: {
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

eyes_extra: {
    gold: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    brown: {
        wiosna_ciepla: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    gray: {
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        zima_czysta: 1,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    green: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    none: {
        wiosna_czysta: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

eyes_ring: {
    strong: {
        wiosna_czysta: 2,
        lato_chlodne: 1,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    medium: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    low: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        lato_jasne: 2,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1
    },
    none: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        lato_jasne: 2,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 1
    }
},

eyes_type: {
    bright: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_ciepla: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    soft: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1
    },
    intense: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_chlodne: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    deep: {
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

skin_color: {
    porcelain: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    light: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_ciepla: 1,
        zima_czysta: 1,
        zima_chlodna: 1
    },
    pink: {
        wiosna_jasna: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    yellow: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    medium: {
        wiosna_ciepla: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    olive: {
        wiosna_ciepla: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    dark: {
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

skin_sun: {
    burn: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 1,
        zima_chlodna: 1
    },
    burn_tan: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    slow_tan: {
        wiosna_ciepla: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    tan_easy: {
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    never_burn: {
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

undertone: {
    pink: {
        wiosna_jasna: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    red: {
        wiosna_jasna: 1,
        wiosna_czysta: 1,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    neutral: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    yellow: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    gold: {
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    olive: {
        wiosna_ciepla: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    }
},

czerwienienie: {
    bardzo_czesto: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    czasami: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    rzadko: {
        wiosna_ciepla: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    prawie_nigdy: {
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

piegi: {
    duzo: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    kilka: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1
    },
    bardzo_malo: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1
    },
    brak: {}
},

kolor_piegow: {
    zloty: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 0,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1
    },
    miedziany: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 0,
        lato_chlodne: 0,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2
    },
    jasnobrazowy: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_ciemna: 1
    },
    szary: {
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        zima_czysta: 1,
        zima_chlodna: 2,
        zima_ciemna: 1
    },
    brak: {
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

kontrast_wlosy: {
    duzy: {
        wiosna_jasna: 1,
        wiosna_ciepla: 0,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    sredni: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    maly: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 0,
        zima_chlodna: 0,
        zima_ciemna: 0
    }
},

kontrast_oczy: {
    duzy: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    sredni: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    maly: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    }
},

kontrast_makijaz: {
    bardzo: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    srednio: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    malo: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    }
},

brwi: {
    tak: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    troche: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    nie: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 0,
        zima_chlodna: 0,
        zima_ciemna: 0
    }
},

uroda: {
    jasna: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    srednia: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    ciemna: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

oczy_wlosy: { 
    jasniejsze: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    podobne: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    ciemniejsze: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

skora_wlosy: {
    jasniejsze: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    troche: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    podobne: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    ciemniejsze: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 0,
        lato_zgaszone: 0,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

kol_natural: {
    intensywna: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    raczej: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    naturalne: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    lekko: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    bardzo_przygasz: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 0,
        lato_zgaszone: 0,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

nasycenie_urody: {
    czysta_kontrastowa: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    miekka_zgaszona: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    gleboka_ciemna: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    jasna_delikatna: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    }
},

oczy: {
    blyszczace: {
        wiosna_jasna: 2,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    miekkie: {
        wiosna_jasna: 1,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    gebokie: {
        wiosna_jasna: 0,
        wiosna_ciepla: 1,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    kontrast: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

bialko: {
    tak: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    srednio: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    nie: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

uroda_bardziej: {
    swierzo_jasno: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    miekko_delikat: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    gleboko_intensywnie: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    kontrastowo_wyraznie: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

twarz_bardziej: {
    jasna: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    zgaszona: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    ciepla: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    chlodna: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    gleboka: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
},

charakter: {
    jasna_lekka: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 0,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 0
    },
    chlodna_delikatna: {
        wiosna_jasna: 1,
        wiosna_ciepla: 1,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 2,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 1,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    ciepla_zlota: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 1,
        lato_jasne: 1,
        lato_chlodne: 1,
        lato_zgaszone: 2,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 1,
        zima_chlodna: 1,
        zima_ciemna: 1
    },
    gleboka_intensywna: {
        wiosna_jasna: 0,
        wiosna_ciepla: 0,
        wiosna_czysta: 0,
        lato_jasne: 0,
        lato_chlodne: 1,
        lato_zgaszone: 1,
        jesien_zgaszona: 2,
        jesien_ciepla: 2,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    },
    kontrastowa: {
        wiosna_jasna: 2,
        wiosna_ciepla: 2,
        wiosna_czysta: 2,
        lato_jasne: 2,
        lato_chlodne: 2,
        lato_zgaszone: 1,
        jesien_zgaszona: 1,
        jesien_ciepla: 1,
        jesien_ciemna: 2,
        zima_czysta: 2,
        zima_chlodna: 2,
        zima_ciemna: 2
    }
}
}

function pobierz(nazwa) {
  const radios = document.getElementsByName(nazwa);

  for (let r of radios) {
    if (r.checked) return r.value;
  }

  return null;
}

function licz() {

  for (let nazwa of pytania) {

    let odp = pobierz(nazwa);

    if (odp && punkty[nazwa] && punkty[nazwa][odp]) {

      let dane = punkty[nazwa][odp];

      for (let typ in dane) {
        wyniki[typ] += dane[typ];
      }
    }
  }

  console.log(wyniki);
}

function licz_i_przejdz() {

    for (let nazwa of pytania) {
        let odp = pobierz(nazwa);
        if (!odp) {
            alert("Odpowiedz na wszystkie pytania!");
            return; // STOP — nie idziemy dalej
        }
    }

    const radios = document.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(r => {
        const q = r.name;
        const v = r.value;
        if (punkty[q] && punkty[q][v]) {
            const typy = punkty[q][v];
            for (let t in typy) {
                wyniki[t] += typy[t];
            }
        }
    });
   
    let maxTyp = Object.keys(wyniki).reduce((a, b) => wyniki[a] > wyniki[b] ? a : b);

    localStorage.setItem("typUrody", maxTyp);
    window.location.href = "wyniki-bj.html";
}