var G = {
    EL: {
        form_car: document.getElementById("id_form_car"),
        button_clear: document.getElementById("id_button_clear"),
        TEXT: {
            input: document.getElementById("id_text_input"),
            comment: document.getElementById("id_text_comment"),
            output: document.getElementById("id_text_output")
        }
    },

    AI: {
        arr_ficha: [
        ["сонный", "классный", "активный", "надёжный",
        "мудрый", "ушастый", "худой", "огромный",
        "высокий", "ездовой", "рабочий", "терпеливый"],
    
        ["слон", "кот", "аист", "носорог",
        "муравей", "удав", "хомяк", "орёл",
        "воробей", "енот", "рак", "тигр"],

        ["сопит", "кушает", "атакует", "несётся",
        "мечтает", "уходит", "хрипит", "отваливается",
        "висит", "ест", "рычит", "тонет"]
        ],

        user_text: document.getElementById("id_text_input").value,

        string_12_lowcase: "сканмуховерт",
        string_12_uppercase: "СКАНМУХОВЕРТ",
        string_empty: "???<br>???",

        all_comments: {
            ok_3: 'Комментарий:<br>Три буквы корректные',
            need_add: 'Комментарий:<br>Добавь букв из "СканМухоВерт',
        },

        f_test_char: function(gotten_char) {
            for(var i = 0; i < 12; i++) {
                if ((gotten_char == G.AI.string_12_lowcase[i]) || (gotten_char == G.AI.string_12_uppercase[i])) {
                    return G.AI.string_12_uppercase[i];
                }
            }
            return "";
        },

        f_get_letters_from_string: function(gotten_string) {
            var string_letters = "";
            for (var i = 0; i < gotten_string.length; i ++) {
                string_letters += G.AI.f_test_char(gotten_string[i]);
                if (string_letters.length == 3) {
                    return string_letters;
                }
            }
            return string_letters;
        },

        f_ficha: function (s012) {
            var s = "", n;
            for (i = 0; i < s012.length; i++) {
                n = G.AI.string_12_uppercase.indexOf(s012[i]);
                s += G.AI.arr_ficha[i][n] + " ";
            }
            return s;
        },

        f_get_text_from_string: function(gotten_string) {
            var s = G.AI.f_get_letters_from_string(gotten_string);
            if (s == "") {return G.AI.string_empty; }
            return s + "<br><b>" + G.AI.f_ficha(s) + "</b>";
        }
    },

    f_renew_comments: function () {
        if (G.AI.f_get_letters_from_string(G.EL.TEXT.input.value).length == 3) {
            G.EL.TEXT.comment.innerHTML = G.AI.all_comments.ok_3;
        } else {
            G.EL.TEXT.comment.innerHTML = G.AI.all_comments.need_add;
        }
    },

    f_on_input: function () {
        G.AI.user_text = G.EL.TEXT.input.value;
        G.EL.TEXT.output.innerHTML = G.AI.f_get_text_from_string(G.AI.user_text);
        G.f_renew_comments();
    },

    f_on_submit: function () {
        return false;
    },

    f_clear: function () {
        G.EL.TEXT.input.value = "";
        G.EL.TEXT.output.innerHTML = G.AI.string_empty;
        G.f_renew_comments();
    }
};

G.EL.TEXT.input.oninput = G.f_on_input;
G.EL.form_car.onsubmit = G.f_on_submit;
G.EL.button_clear.onmousedown = G.f_clear;
