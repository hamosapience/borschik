(function () {
    const A = (page) => {
        var re = GLO();

        return page.replace(re, '');
    };

    const B = ({page, text}) => {
                text = A(text);

                return text + page.x;

    };

    GLOB(B);
}({}));
