class RuhrpottIpsum {
    parentElement = null;
    text          = [
        'Ker wat is dat schön!',
        'Hömma!',
        'Weisse wat?',
        'Sach ma!',
        'Is nich wahr!',
        'Kennse dat?',
        'Alles paletti?',
        'Dat kannse Dir abschminken.',
        'Da kommse nich gut bei wech, dat sach ich Dir.',
        'Ker dat macht mich feddich!',
        'Nee sowat mach ich nich.',
        'Dat is doppelt gemoppelt!',
        'Da kam der aber angepest!',
        'Getz mach den Apparillo aus!',
        'Da hat se mich vielleicht angepflaumt.',
        'Getz is ma Ruhe im Kabuff!',
        'Dat is doch pille-palle.',
        'Mach hier nich son Killefitt!',
        'Dat is doch Pipifax!',
        'Und mach mir keine Fissematenten!',
        'Ich hab Dir ne Kniffte mitgebracht.',
        'Willse noch ne Stulle futtern?',
        'Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel.',
        'Von mir aus kannste auch bis Pussemuckel fahren.',
        'Wat macht die Trulla da?',
        'Nimma Deine Quanten da wech.',
        'Wem sein Drahtesel is dat?',
        'Komm annen Tisch, gleich gibbet Essen.',
        'Komma nache Omma hin.',
        'Kinnas getz kommt rein, es fängt am regen!',
        'Komma bei de Omma bei.',
        'Kannse dem Ömmaken ma über de Straße helfen?',
        'Ich hab Blümskes füre Frau gekauft.',
        'Komm wir gehn Mittach essen.',
        'Was guckse denn so bedröppelt?',
        'Lass ma abdackeln von hier.',
        'Geh mal wech mit Deine Plautze.',
        'Komm wir gehn noch aufn Absacker inne Kneipe.',
        'Hier siehts aus wie bei Hempels unterm Sofa!',
        'Die hat en um seine ganzen Moneten gebracht.',
        'Ker guck Dir ma dat süße Stöppken an.',
        'Na dat nenn ich ma nen Wonneproppen.',
        'Dann gehn wir heute innen Zappelbunker.',
        'Dann is ma richtich Trallafitti.',
        'Komma beim Oppa auf Schößken.',
        'Da ging mir das Herz aber bis inne Unterbuxe!',
        'Geh mir getz nich auffe Pimpanellen!',
        'Mach ma die Funzel an.',
        'Du wills mich wohl verhohnepiepeln!',
        'Ich muss gleich wieder auffe Maloche.',
        'Guck ma, wie er de halbe Hahn ganz allein verkasematuckelt hat.',
        'Wie willste dat denn da rein friemeln, da wirste doch meschugge bei!',
        'Ich ess getz erstma mein Bütterken auf und dann gucken wa ma.',
        'Hömma, du schuldes mir nochn Heiermann, den kannse so langsam ma abdrücken.',
        'Weisse, die Tour vonne Kneipe nache Hütte bin ich vollsteif abgelatscht.',
        'Geh ma anne Bude und bring fünf Pullen Bier mit.',
        'Ich hab hier wirklich alles abklabastert, aber nix gefunden.',
        'Da hat der sein ganzes Leben lang geackert bis er nich mehr konnte und dann is ihn ein Jahr nache Rente abgenippelt.',
        'Wenn ich de Bälgers nochma erwische, wie se bei mir Klingelmänneken machen, dann is hier aber Halligalli!',
        'Die Trude gibbelt wien Suppenhuhn, dat gerade Zwillinge geleg hat.',
        'Da kam so nen Kerl zu uns inne Bude, dat wahr vielleicht en Kawennzmann, dat sach ich Dir!',
        'Die Frau Koschinski, die alte Kampfschnake, kam bei uns auffen Bau und sachte, dasse ihren Macker sucht.',
        'Heute gehn wa schön essen, gibt lecker Pommes Schranke.',
        'Weisse wat Du mich kanns, Du kanns mich ma gern haben, Du Ömmes!',
    ];
    constructor(selector) {
        this.parentElement = document.querySelector(selector);
    };

    getText(textLength, paragraphs) {
        let textArea = document.createElement('div');
        let pTag     = null;
        this.parentElement.innerHTML = '';

        textArea.classList.add('textarea');
        for(;paragraphs > 0; paragraphs--) {
            pTag           = document.createElement('p');
            pTag.appendChild(document.createTextNode(this.getParagraph(this.getTextLength(textLength))));
            textArea.appendChild(pTag);
        }
        this.parentElement.appendChild(textArea);
    }

    getParagraph(amount) {
        let paragraph = [];
        let textIndex = 0;

        for(; amount > 0; amount--) {
            textIndex = Math.floor(Math.random() * this.text.length ) - 1;
            paragraph.push(this.text[textIndex]);
        }
        return paragraph.join(' ').trim();
    }

    getTextLength(textLength) {
        let amount = 200;

        switch (textLength) {
            case 's':
                amount = Math.floor(Math.random() * 16) + 15;
                break;
            case 'm':
                amount = Math.floor(Math.random() * 31) + 30;
                break;
            case 'l':
                amount = Math.floor(Math.random() * 51) + 50;
                break;
            default:
                break;
        }

        return amount;
    }

    copyToClipboard(text) {
        function listener(e) {
            e.clipboardData.setData('text/html', text);
            e.clipboardData.setData('text/plain', text);
            e.preventDefault();
        }
        document.addEventListener('copy', listener);
        document.execCommand('copy');
        document.removeEventListener('copy', listener);
    }
}
