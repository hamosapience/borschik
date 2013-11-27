#Borschik-webp

## It's a fork of borschik with support of webp encoding
## Форк борщика с опцией перекодирования изображений в webp
* Usage:
Flag -w=yes (--webp=yes)
```
~/borschik/bin/borschik -i in.css -o out.css -w=yes
```

* Settings in .borschik:
```
"webp" : {
                "quality": "90", //encoding quality
		"lossless": false, //whether or not use lossless enconding
                "exclude_paths": [".+jpg$"] //regexps defining paths to images which you are don't want to encode
          }
```

# Borschik
[![Build Status](https://secure.travis-ci.org/bem/borschik.png?branch=master)](http://travis-ci.org/bem/borschik)
[![NPM version](https://badge.fury.io/js/borschik.png)](http://badge.fury.io/js/borschik)
[![Dependency Status](https://david-dm.org/bem/borschik.png)](https://david-dm.org/bem/borschik)


#English
Borschik is an extendable builder for text-based file formats.
It's main purpose is the assembly of static files for web projects (CSS, JS, etc.).

[Documentation](./docs/index/index.en.md)

[JS include notations](./docs/js-include/js-include.en.md)

[Freeze and resource inlining](./docs/freeze/freeze.en.md)

[How borschik resolves technologies](./docs/where-is-my-tech/where-is-my-tech.en.md) and
[How to extend borschik (write your own technology)](./docs/how-to-write-tech/how-to-write-tech.en.md)

[Article at bem.info](http://bit.ly/en-borschik)

#Русский
Borschik — это расширяемый сборщик файлов текстовых форматов.
Его основной задачей является сборка статических файлов веб-проектов (CSS, JS
и т.д.).

[Документация](./docs/index/index.ru.md)

[Статья про Borschik на bem.info](http://bit.ly/ru-borschik)

<!-- Yandex.Metrika counter -->
<img src="https://mc.yandex.ru/watch/12831025" style="position:absolute; left:-9999px;" alt="" />
<!-- /Yandex.Metrika counter -->
