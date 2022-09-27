class Validation {

    checkIfEmpty(value) {
        value.length > 0 ? true : false;
    }
    checkLettersCount(value, count) {
        value.length > count ? true : false;
    }
    validateEmail(value) {}
    validatePassword(value) {}

    validateMenuName(value, count) {
        if (checkIfEmpty(value) && checkLettersCount(value, count)) {
            return { error: null, status: true };
        }else if(checkIfEmpty(value) && !checkLettersCount(value, count) ){
            return { error: "Field mustn't be empty", status: false };
        }else if(checkLettersCount(value) && !checkIfEmpty(value, count)){
            return { error: `Field must contain  not more than ${count} letters`, status: false };
        }
    }

    containsCharacters(value, code) {
        let regEx;
        switch (code) {
            case 1:
                // letters
                regEx = /[A-Za-zА-Яа-яЁё]\D$/u;
                return matchWithRegEx(
                    regEx,
                    value,
                    "Поле должно содержать только буквы"
                );
            case 2:
                // первая буква строки должна быть в верхнем регистре, а все остальные в нижнем:
                regEx = /^([А-ЯЁ]{1}[а-яё]{3-20})|([A-Z]{1}[a-z]{3-20})$/u;
                return matchWithRegEx(
                    regEx,
                    value,
                    "Должно начинаться со строчной буквы, содержать латинские буквы или кириллицу, "
                );
            case 3:
                // uppercase, lowercase and number
                regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
                return matchWithRegEx(
                    regEx,
                    value,
                    "Must contain at least one uppercase, one lowercase letter and one number"
                );
            case 4: //pass
                // 8 to 15 characters which contain at least one lowercase letter,
                // one uppercase letter, one numeric digit, and one special character
                regEx =
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
                return matchWithRegEx(
                    regEx,
                    value,
                    "Пароль содержит заглавные и строчные буквы латинского алфавита, цифры, специальный символ"
                );
            case 5:
                // Email pattern
                regEx =
                    /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
                return matchWithRegEx(
                    regEx,
                    value,
                    "Must be a valid email address"
                );

            default:
                return false;
        }
    }

    matchWithRegEx(regEx, value, message) {
        if (value.match(regEx)) {
            return true;
        } else {
            return false;
        }
    }
}

export default new Validation();
