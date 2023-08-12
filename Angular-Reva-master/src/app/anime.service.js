"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AnimeService = void 0;
var core_1 = require("@angular/core");
var AnimeService = /** @class */ (function () {
    function AnimeService() {
        this.animeArr = [
            {
                animeFor: "Beginner", animeImg: '../assets/images/death-note.jpg', animeName: 'Death Note', animeDescription: 'This is anime is about a man name Light Yagami who found a notebook in which if he writes name of a person he/ she will die in 10 minutes(by default ).Time and place can also be defined.That notebook was provided by a shinigami who just want to have some fun on earth.Light wants to create a world with no criminal so decided to kill them all. The whole anime is 37 episodes long.It is a very creative and loved by those who love high IQ things or thinking.'
            },
            {
                animeFor: "Beginner", animeImg: '../assets/images/blue-lock.jpg', animeName: 'Blue lock', animeDescription: 'This anime is based on football. A guy named Ego desire to create the most powerful Striker of the world for the Japanese team so they can win World cup. The main character of this Isagi who is an average but doing hardwork to become a genius.It is best to watch by someone who is interested in watching struggle based anime.'
            },
            {
                animeFor: "Beginner", animeImg: '../assets/images/The-seven-deadly-sins.jpg', animeName: 'The Seven Deadly Sins', animeDescription: 'This anime is about seven sinners and a girl, from god kin, who get reincarnated everytime is she knows about her previous life (for reason watch this anime😁😁). Her lover Meliodas, to be demon king, continuously fighting to release her curse. In his journey he met with 6 more sinners and thus name is The Seven Deadly Sins. My favourate character is Excanor the lion sin of pride. The whole anime is of 5 seasons. This anime is a little erotic but have a very decent story line with humor, fight, romance, etc. If you are magic lover want to start with magic and overpowered character with comdey your search is over.'
            },
            {
                animeFor: "Beginner", animeImg: '../assets/images/Demon-slayer.jpg', animeName: 'Demon Slayer', animeDescription: "This anime is about a boy whose family is killed by demons and his sister becomes a demon. He saves his sister from a demon slayer and by seeing a unique behaviour in demon sister and relationship between siblings, the demon slayer left them and guide the boy to become a demon slayer. This anime is best when it comes to animation. Then kind of animation it has can't be compared with anyone. A fighting anime that have both friendship, loyality, pride and suspense is what an Otaku needs."
            },
            {
                animeFor: "New Release", animeImg: '../assets/images/eminence-of-shadow.png', animeName: 'The Eminence of Shadow', animeDescription: "This is anime is about a boy who wants to be a hero who works in shadow. He seeks power which is superior to every being on the planet. He get reincarnated into another world with his knowledge of martial arts. With the magic in isekai he became the most powerful being. He created an organisatin called shadow garden - shadow coming from his alias name. The anime is of 20 episodes and basically demonstrate a overpowered mc in an isekai world. This anime is full of comedy. A must watch anime."
            },
            {
                animeFor: "New Release", animeImg: '../assets/images/skeleton-knight.jpg', animeName: 'The Skeleton Knight', animeDescription: "This anime is about a man who sent to another world. He reincarnated as a skeleton and a vert powerful man. He tries not to show his power or become famous but always do the same. He wants to learn more about that world so he begin his journey as a adventurer.  This anime is a short anime with 12 episodes. This anime is pretty good when it comes to overpowered mc and magic anime. "
            },
            {
                animeFor: "New Release", animeImg: '../assets/images/shikimori-is-not-a-cutie.jpg', animeName: 'Shikimori’s Not Just a Cutie', animeDescription: "This anime is about a girl and a boy who are in high school and are lovers. The boy always hass bad luck and misfortune always happen with him. The girl is a possessive when it comes to her lover otherwise she is cute and lovely. Their love story is kind of imaginary but amzing too. If you love romantic anime then you gonna love this anime. It is a small anime with only 12 episodes."
            },
            {
                animeFor: "New Release", animeImg: '../assets/images/spy-family.png', animeName: 'Spy Family', animeDescription: "When it comes to an anime which is kind of cute, spy-family is the best. This family has 3 members. Dad who is a spy, mom who is an assassin and the main character anya who can read minds. They are not real family but became one due to a reason which I won't tell you😜😜. This anime is small one with two seasons and a very funny one. This is a cute anime and I'm love it a lot."
            },
        ];
    }
    AnimeService.prototype.getBeginner = function () {
        return this.animeArr.filter(function (anime) { return anime.animeFor == "Beginner"; });
    };
    AnimeService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], AnimeService);
    return AnimeService;
}());
exports.AnimeService = AnimeService;
