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

const pytania = ["hair_child", "chai_now", "hair_light", "hair_sun", "hair_reflections", "eyes_color",
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

    chai_now: {
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

    hair_reflection: {
        zlote: {wiosna_jasna: 1, wiosna_ciepla: 2, wiosna_czysta: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1, },
        miedziane: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 1},
        popielate: {lato_jasne: 1, lato_chlodne: 2, lato_zgaszone: 1, zima_czysta: 1, zima_chlodna:1},
        czerwone: {wiosna_ciepla: 1, jesien_zgaszona: 1, jesien_ciepla: 2, jesien_ciemna: 2},
        brak: {wiosna_ciepla: 1, wiosna_czysta: 1, wiosna_jasna: 1, lato_chlodne:1, lato_jasne: 1, lato_zgaszone: 1, jesien_ciemna: 1, jesien_ciepla: 1, jesien_zgaszona: 1, zima_chlodna: 1, zima_ciemna:1, zima_czysta: 1}
    },

    eyes_color: {
        light_blue: {wiosna_jasna: 1, wiosna_czysta: 2, lato_jasne:2, lato_chlodne: 1, lato_zgaszone: 1, zima_czysta: 2, zima_chlodna: 1},
        dark_blue: {wiosna_czysta: 1, lato_chlodne: 1, lato_zgaszone: 1, zima_czysta: 2, zima_chlodna: 2, zima_ciemna: 1},
        steel_blue: { },
        gray: {},
        green: {},
        green_gray: {},
        hazel: {},
        light_brown: {},
        medium_brown: {},
        dark_brown: {},
        black: {}

    }
}
