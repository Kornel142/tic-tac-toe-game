(() => {
  var e = {
      123: (e) => {
        e.exports =
          '<svg id="icon-o-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"></path></svg>';
      },
      769: (e) => {
        e.exports =
          '<svg fill="#f2b137" id="icon-o-win" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"></path></svg>';
      },
      102: (e) => {
        e.exports =
          '<svg id="icon-x-default" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"></path></svg>';
      },
      118: (e) => {
        e.exports =
          '<svg fill="#31c3bd" id="icon-x-win" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"></path></svg>';
      },
    },
    t = {};
  function n(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var r = (t[a] = { exports: {} });
    return e[a](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      var t, a, s, r, o, l;
      !(function (e) {
        (e.DEFAULT_PLAYER = "X"), (e.PLAYER_X = "X"), (e.PLAYER_O = "O");
      })(t || (t = {})),
        (function (e) {
          (e.DEFAULT = ""),
            (e.PLAYER_VS_CPU = "CPU"),
            (e.PLAYER_VS_PLAYER = "PVP");
        })(a || (a = {})),
        (function (e) {
          (e.DEFAULT_TURN = "X"), (e.X_TURN = "X"), (e.O_TURN = "O");
        })(s || (s = {})),
        (function (e) {
          (e[(e.X_POINTS = 0)] = "X_POINTS"),
            (e[(e.O_POINTS = 0)] = "O_POINTS"),
            (e[(e.TIES = 0)] = "TIES");
        })(r || (r = {})),
        (function (e) {
          (e.HOVER_DEFAULT = "selected-board-mark-X"),
            (e.HOVER_X = "board-X"),
            (e.HOVER_O = "board-O"),
            (e.SELECTED_X = "selected-by-X"),
            (e.SELECTED_O = "selected-by-O");
        })(o || (o = {})),
        (function (e) {
          (e.WINNER_X = "X"),
            (e.WINNER_O = "O"),
            (e.TIE = "tie"),
            (e.DEFAULT_WINNER = "");
        })(l || (l = {}));
      const i = function (t) {
          return e.reduce((e, n) => {
            const a = n.filter((e) => t.includes(e));
            return a.length === n.length && e.push(...a), e;
          }, []);
        },
        c = {
          currentPlayer: t.DEFAULT_PLAYER,
          firstTurn: t.PLAYER_X,
          cpuTurn: !1,
          players: { player1: t.PLAYER_O, player2: t.PLAYER_X },
          whoWinTurn: { X_WIN: !1, O_WIN: !1, ties: !1 },
          game: {
            gameType: a.DEFAULT,
            playerTurn: s.DEFAULT_TURN,
            playersPoints: { X_points: [], O_points: [] },
            playersWinTurn: { X_turn: 0, ties: 0, O_turn: 0 },
          },
        },
        d = function (t) {
          return e.some((e) =>
            (function (e, t) {
              const n = {},
                a = {};
              for (const t of e) n[t] = (n[t] || 0) + 1;
              for (const e of t) a[e] = (a[e] || 0) + 1;
              for (const e in n) {
                if (!(e in a)) return !1;
                if (n[e] !== a[e]) return !1;
              }
              return !0;
            })(e, t)
          );
        },
        u = function (e) {
          e === l.WINNER_X &&
            ((c.whoWinTurn.X_WIN = !0), c.game.playersWinTurn.X_turn++),
            e === l.WINNER_O &&
              ((c.whoWinTurn.O_WIN = !0), c.game.playersWinTurn.O_turn++),
            e === l.TIE &&
              ((c.whoWinTurn.ties = !0), c.game.playersWinTurn.ties++);
        },
        _ = function () {
          (c.whoWinTurn.X_WIN = !1),
            (c.whoWinTurn.O_WIN = !1),
            (c.whoWinTurn.ties = !1),
            (c.game.playersPoints.X_points = []),
            (c.game.playersPoints.O_points = []);
        };
      var E,
        p = n(102),
        L = n.n(p),
        m = n(123),
        h = n.n(m);
      class y {
        static updateUI(e) {
          (this.data = e),
            this.updatePlayerUI(),
            this.showWhoTurn(),
            this.addSelectClassListener(),
            this.addHoverListeners();
        }
        static blockEventHandling() {
          this.parentElement.classList.add("block-event");
        }
        static unBlockEventHandlind() {
          this.parentElement.classList.remove("block-event");
        }
        static addBoxHandler(e, t = this.selectedBoxCounter) {
          this.parentElement.addEventListener("click", function (n) {
            const a = n.target,
              s = +a.id;
            "SELECTED" !== a.dataset.select &&
              a.classList.contains("board-box") &&
              (a.classList.contains("board-O") ||
                a.classList.contains("board-X")) &&
              ((a.dataset.select = "SELECTED"), !0 === t() ? e(s, !0) : e(s));
          });
        }
        static addCpuChoice(e) {
          this.data = e;
          const [t] = this.selectClass(),
            n = Array.from(this.gameBox);
          let a;
          do {
            a = Math.floor(10 * Math.random());
          } while (!n[a] || "SELECTED" === n[a].dataset.select);
          const s = n[a],
            r = +n[a].id;
          return s.classList.add(t), (s.dataset.select = "SELECTED"), r;
        }
        static selectedBoxCounter() {
          const e = Array.from(document.querySelectorAll(".board-box"));
          for (const t of e)
            if (
              t instanceof HTMLElement &&
              (!t.dataset || "SELECTED" !== t.dataset.select)
            )
              return !1;
          return !0;
        }
        static addWinClass(e) {
          e.forEach((e) => {
            const t = document.getElementById(String(e));
            t && t.classList.contains("selected-by-X")
              ? t.classList.add("win-X")
              : t.classList.add("win-O");
          });
        }
        static showWhoTurn() {
          const e = document.querySelector(".gameplay__turn");
          e.innerHTML = "";
          const t = this.generateMarkupTurn();
          e.insertAdjacentHTML("beforeend", t);
        }
        static generateMarkupTurn() {
          return this.data.currentPlayer === t.PLAYER_O
            ? `      \n    <svg class="gamplay__turn-icon">\n    ${h()}\n    </svg>\n    <span class="gamplay__turn__text"> TURN</span>`
            : `\n    <svg class="gamplay__turn-icon">\n    ${L()}\n    </svg>\n    <span class="gamplay__turn__text"> TURN</span>`;
        }
        static updatePlayerUI() {
          const e = document.querySelector(".O-text"),
            n = document.querySelector(".X-text");
          this.data.game.gameType === a.PLAYER_VS_PLAYER
            ? (this.data.players.player1 === t.PLAYER_O
                ? (e.textContent = "O (P1)")
                : (e.textContent = "O (P2)"),
              this.data.players.player2 === t.PLAYER_X
                ? (n.textContent = "X (P2)")
                : (n.textContent = "X (P1)"))
            : (this.data.players.player1 === t.PLAYER_O
                ? (e.textContent = "O (YOU)")
                : (e.textContent = "O (CPU)"),
              this.data.players.player2 === t.PLAYER_X
                ? (n.textContent = "X (CPU)")
                : (n.textContent = "X (YOU)"));
        }
        static addSelectClassListener() {
          this.gameBox.forEach((e) => {
            e.addEventListener("click", this.addClickBox);
          });
        }
        static addHoverListeners() {
          this.gameBox.forEach((e) => {
            e.addEventListener("mouseenter", this.mouseEnterHandler),
              e.addEventListener("mouseout", this.mouseOutHandler);
          });
        }
        static handleMouseEnter(e) {
          const [t, n] = this.hoverClass(),
            a = e.target;
          "SELECTED" !== a.dataset.select &&
            (a.classList.add(t), a.classList.remove(n));
        }
        static handleMouseOut(e) {
          const [t, n] = this.hoverClass(),
            a = e.target;
          a.classList.remove(t), a.classList.remove(n);
        }
        static boxClick(e) {
          const [t, n] = this.selectClass(),
            a = e.target;
          "SELECTED" !== a.dataset.select &&
            a.classList.contains("board-box") &&
            (a.classList.add(t), a.classList.remove(n));
        }
        static hoverClass() {
          return [
            this.data.currentPlayer === t.PLAYER_O ? o.HOVER_O : o.HOVER_X,
            this.data.currentPlayer === t.PLAYER_O ? o.HOVER_X : o.HOVER_O,
          ];
        }
        static selectClass() {
          return [
            this.data.currentPlayer === t.PLAYER_O
              ? o.SELECTED_O
              : o.SELECTED_X,
            this.data.currentPlayer === t.PLAYER_O
              ? o.SELECTED_X
              : o.SELECTED_O,
          ];
        }
      }
      (E = y),
        (y.parentElement = document.querySelector(".game-board")),
        (y.gameBox = document.querySelectorAll(".board-box")),
        (y.addClickBox = (e) => {
          E.boxClick(e);
        }),
        (y.mouseEnterHandler = (e) => {
          E.handleMouseEnter(e);
        }),
        (y.mouseOutHandler = (e) => {
          E.handleMouseOut(e);
        });
      const P = y;
      var T = n(118),
        g = n.n(T),
        R = n(769),
        O = n.n(R);
      class f {
        constructor() {
          (this.parentElement = document.querySelector(".modal-winner-window")),
            (this.overlay = document.querySelector(".overlay")),
            (this.data = {});
        }
        showModal(e) {
          this.data = e;
          const t = this.generateMarkup();
          this.parentElement.classList.remove("hidde"),
            this.overlay.classList.remove("hidde"),
            (this.parentElement.innerHTML = ""),
            this.parentElement.insertAdjacentHTML("beforeend", t);
        }
        updateUI(e) {
          this.data = e;
          const t = document.querySelector(".X"),
            n = document.querySelector(".O"),
            a = document.querySelector(".ties"),
            s = document.querySelectorAll(".board-box");
          (t.textContent = `${e.game.playersWinTurn.X_turn}`),
            (n.textContent = `${e.game.playersWinTurn.O_turn}`),
            (a.textContent = `${e.game.playersWinTurn.ties}`),
            this.overlay.classList.add("hidde"),
            this.parentElement.classList.add("hidde"),
            s.forEach((e) => {
              e.classList.remove("selected-by-X"),
                e.classList.remove("selected-by-O"),
                e.classList.remove("win-X"),
                e.classList.remove("win-O"),
                e.removeAttribute("data-select");
            });
        }
        generateMarkup() {}
      }
      const A = new (class extends f {
        addModalHandler(e) {
          this.parentElement.addEventListener("click", (t) => {
            const n = t.target;
            if (
              (n.classList.contains("next__round__btn") && e(!0, !1),
              n.classList.contains("quit__btn"))
            ) {
              const t = document.querySelector(".game-board-section"),
                n = document.querySelector(".new-game");
              t.classList.add("hidde"),
                n.classList.remove("hidde"),
                e(!1, !1, !1);
            }
          });
        }
        generateMarkup() {
          return `\n    <span class="modal__winner-text">${this.generateMarkupHeader()}</span>\n    <div class="modal__header">\n      ${this.generateMarkupText()}\n    </div>\n    <div class="modal__buttons">\n      <button class="btn__left quit__btn">QUIT</button>\n      <button class="btn__right next__round__btn">NEXT ROUND</button>\n    </div>`;
        }
        generateMarkupText() {
          return this.data.whoWinTurn.O_WIN
            ? `\n   <svg class="modal__winner__icon"${O()}</svg>\n   <span class="modal__header__text O__win__text"> TAKES THE ROUND </span>\n    `
            : this.data.whoWinTurn.X_WIN
            ? `\n    <svg class="modal__winner__icon">${g()}</svg>\n    <span class="modal__header__text X__win__text"> TAKES THE ROUND </span>\n    `
            : this.data.whoWinTurn.ties
            ? '\n    <span class="modal__header__text restart__text"> ROUND TIED </span>\n    '
            : "";
        }
        generateMarkupHeader() {
          return this.data.game.gameType === a.PLAYER_VS_PLAYER
            ? this.winnerAlgoritm("PLAYER 1 WINS!", "PLAYER 2 WINS!")
            : this.data.game.gameType === a.PLAYER_VS_CPU
            ? this.winnerAlgoritm("YOU WON!", "OH NO, YOU LOST...")
            : "";
        }
        winnerAlgoritm(e, n) {
          return !0 === this.data.whoWinTurn.O_WIN &&
            this.data.players.player1 === t.PLAYER_O
            ? e
            : !0 === this.data.whoWinTurn.O_WIN &&
              this.data.players.player2 === t.PLAYER_O
            ? n
            : !0 === this.data.whoWinTurn.X_WIN &&
              this.data.players.player1 === t.PLAYER_X
            ? e
            : !0 === this.data.whoWinTurn.X_WIN &&
              this.data.players.player2 === t.PLAYER_X
            ? n
            : "";
        }
      })();
      class v extends f {
        constructor() {
          super(...arguments),
            (this.resetGameBtn = document.querySelector(".reset-game"));
        }
        addRenderModal(e) {
          this.resetGameBtn.addEventListener("click", function () {
            e();
          });
        }
        addRestartModalHandler(e, t = this.toggleWindow) {
          this.parentElement.addEventListener("click", function (n) {
            const a = n.target;
            a.classList.contains("restart")
              ? e(!1, !1, !0)
              : a.classList.contains("cancle") && (e(!1, !0), t());
          });
        }
        toggleWindow() {
          this.parentElement.classList.add("hidde"),
            this.overlay.classList.add("hidde");
        }
        generateMarkup() {
          return '\n    <div class="modal__header">\n    <span class="modal__header__text restart__text"> RESTART GAME? </span>\n    </div>\n    <div class="modal__buttons">\n      <button class="btn__left cancle">NO, CANCLE</button>\n      <button class="btn__right restart">YES, RESTART</button>\n    </div>';
        }
      }
      !(function (e, t, n, a) {
        var s,
          r = arguments.length,
          o =
            r < 3
              ? t
              : null === a
              ? (a = Object.getOwnPropertyDescriptor(t, n))
              : a;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, n, a);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (s = e[l]) &&
              (o = (r < 3 ? s(o) : r > 3 ? s(t, n, o) : s(t, n)) || o);
        r > 3 && o && Object.defineProperty(t, n, o);
      })(
        [
          function (e, t, n) {
            const a = n.value;
            return {
              configurable: !0,
              enumerable: !1,
              get() {
                return a.bind(this);
              },
            };
          },
        ],
        v.prototype,
        "toggleWindow",
        null
      );
      const Y = new v();
      class X {
        static addChoosePlayerHandler(e) {
          this.parentElement.addEventListener("click", function (t) {
            var n;
            const a = t.target;
            if (!a.closest(".PLAYER")) return;
            const s =
                null === (n = a.closest(".PLAYER")) || void 0 === n
                  ? void 0
                  : n.id,
              r = document.querySelector(".game-start__x-mark"),
              o = document.querySelector(".game-start__o-mark");
            "X" == s
              ? (null == r || r.classList.add("selected"),
                null == o || o.classList.remove("selected"))
              : (null == r || r.classList.remove("selected"),
                null == o || o.classList.add("selected")),
              e(s);
          });
        }
      }
      X.parentElement = document.querySelector(".player-choose");
      const w = X;
      const x = function (e, n) {
          !0 !== c.cpuTurn &&
            ((function (e) {
              !(function (e) {
                c.currentPlayer === t.PLAYER_X
                  ? (c.game.playersPoints.X_points.push(e),
                    (c.currentPlayer = t.PLAYER_O))
                  : (c.game.playersPoints.O_points.push(e),
                    (c.currentPlayer = t.PLAYER_X));
              })(e);
            })(e),
            U(),
            (function (e) {
              d(c.game.playersPoints.O_points) &&
                (u(l.WINNER_O),
                P.blockEventHandling(),
                P.addWinClass(i(c.game.playersPoints.O_points)),
                H()),
                d(c.game.playersPoints.X_points) &&
                  (u(l.WINNER_X),
                  P.blockEventHandling(),
                  P.addWinClass(i(c.game.playersPoints.X_points)),
                  H()),
                !0 === e && (P.blockEventHandling(), u(l.TIE), H());
            })(n));
        },
        b = function (e, t) {
          var n;
          x(e, t),
            (n = c).whoWinTurn.O_WIN ||
              n.whoWinTurn.X_WIN ||
              n.whoWinTurn.ties ||
              C();
        },
        S = function () {
          P.updateUI(c),
            c.players.player1 === t.PLAYER_O && D(),
            c.players.player1 === t.PLAYER_X && k();
        },
        C = function () {
          return (
            (e = this),
            (t = void 0),
            (a = function* () {
              P.blockEventHandling(),
                (c.cpuTurn = !0),
                yield new Promise((e) => {
                  setTimeout(() => {
                    for (; c.cpuTurn; ) {
                      const t = P.addCpuChoice(c),
                        n = P.selectedBoxCounter();
                      (c.cpuTurn = !1), x(t, n), e("resolved"), I();
                    }
                  }, 1e3);
                });
            }),
            new ((n = void 0) || (n = Promise))(function (s, r) {
              function o(e) {
                try {
                  i(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
                try {
                  i(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function i(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(o, l);
              }
              i((a = a.apply(e, t || [])).next());
            })
          );
          var e, t, n, a;
        },
        N = function (e, n, a) {
          !1 === n &&
            (!0 === e
              ? (c.firstTurn === t.PLAYER_X
                  ? ((c.currentPlayer = t.PLAYER_O),
                    (c.firstTurn = t.PLAYER_O),
                    (c.game.playerTurn = s.O_TURN))
                  : c.firstTurn === t.PLAYER_O &&
                    ((c.currentPlayer = t.PLAYER_X),
                    (c.firstTurn = t.PLAYER_X),
                    (c.game.playerTurn = s.X_TURN)),
                _(),
                W(),
                A.updateUI(c),
                U())
              : !0 === a
              ? M()
              : location.reload());
        },
        W = function () {
          c.game.gameType === a.PLAYER_VS_CPU &&
            (c.players.player1 === t.PLAYER_O &&
              c.currentPlayer === t.PLAYER_O &&
              k(),
            c.players.player1 === t.PLAYER_O &&
              c.currentPlayer === t.PLAYER_X &&
              D(),
            c.players.player1 === t.PLAYER_X &&
              c.currentPlayer === t.PLAYER_O &&
              D());
        },
        U = function () {
          P.updateUI(c);
        },
        H = function () {
          setTimeout(() => {
            A.showModal(c);
          }, 700);
        },
        I = function () {
          setTimeout(() => {
            P.unBlockEventHandlind();
          }, 1500);
        },
        M = function () {
          _(),
            c.game.gameType === a.PLAYER_VS_PLAYER &&
              (c.firstTurn === t.PLAYER_X &&
                ((c.currentPlayer = t.PLAYER_X),
                (c.game.playerTurn = s.X_TURN)),
              c.firstTurn === t.PLAYER_O &&
                ((c.currentPlayer = t.PLAYER_O),
                (c.game.playerTurn = s.O_TURN))),
            c.game.gameType === a.PLAYER_VS_CPU &&
              (c.firstTurn === t.PLAYER_X && c.players.player2 === t.PLAYER_X
                ? ((c.currentPlayer = t.PLAYER_X),
                  (c.game.playerTurn = s.X_TURN),
                  (c.cpuTurn = !0))
                : c.firstTurn === t.PLAYER_X && c.players.player1 === t.PLAYER_X
                ? ((c.currentPlayer = t.PLAYER_X),
                  (c.game.playerTurn = s.X_TURN))
                : c.firstTurn === t.PLAYER_O && c.players.player2 === t.PLAYER_O
                ? ((c.currentPlayer = t.PLAYER_O),
                  (c.game.playerTurn = s.O_TURN),
                  (c.cpuTurn = !0))
                : c.firstTurn === t.PLAYER_O &&
                  c.players.player1 === t.PLAYER_O &&
                  ((c.currentPlayer = t.PLAYER_O),
                  (c.game.playerTurn = s.O_TURN))),
            A.updateUI(c),
            U(),
            !0 === c.cpuTurn && D();
        },
        k = function () {
          I(), U(), P.addBoxHandler(b);
        },
        D = function () {
          P.blockEventHandling(), C(), P.addBoxHandler(b);
        };
      (class {
        static addGameModeHandler(e) {
          window.addEventListener("click", function (t) {
            const n = t.target,
              a = document.querySelector(".new-game"),
              s = document.querySelector(".game-board-section");
            if (!n.classList.contains("game-mode")) return;
            const r = n.id;
            return (
              e(r), a.classList.add("hidde"), s.classList.remove("hidde"), r
            );
          });
        }
      }).addGameModeHandler(function (e) {
        !(function (e) {
          c.game.gameType = "PVP" === e ? a.PLAYER_VS_PLAYER : a.PLAYER_VS_CPU;
        })(e),
          c.game.gameType === a.PLAYER_VS_PLAYER
            ? (U(), P.addBoxHandler(x))
            : c.game.gameType === a.PLAYER_VS_CPU && S(),
          console.log(c);
      }),
        w.addChoosePlayerHandler(function (e) {
          var n;
          "O" === (n = e) &&
            ((c.players.player1 = t.PLAYER_O),
            (c.players.player2 = t.PLAYER_X)),
            "X" === n &&
              ((c.players.player1 = t.PLAYER_X),
              (c.players.player2 = t.PLAYER_O));
        }),
        Y.addRenderModal(function () {
          Y.showModal(c), Y.addRestartModalHandler(N);
        }),
        A.addModalHandler(N);
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixlQUNsRDRCLElBRUZxQixRQUFRQyxJQUFJLEVBQ2QsSUEwS0UsRUFBYWpDLHdCQTFMYSxTQUFVRSxHTjhCWixJQUFVbkosRUFDWixPQURZQSxFTTdCakJtSixLTitCZnBKLEVBQU1NLFFBQVFDLFFBQVV4QixFQUFheUIsU0FDckNSLEVBQU1NLFFBQVFHLFFBQVUxQixFQUFhcUIsVUFFakIsTUFBbEJILElBQ0ZELEVBQU1NLFFBQVFDLFFBQVV4QixFQUFhcUIsU0FDckNKLEVBQU1NLFFBQVFHLFFBQVUxQixFQUFheUIsU01uQ3pDLElBMExFLEVBQWM4SCxnQkFqQ2dCLFdBQzlCLEVBQWNqQixVQUFVLEdBQ3hCLEVBQWNrQix1QkFBdUI2QixFQUN2QyxJQWdDRSxFQUFVekMsZ0JBQWdCeUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9pY29uLW8tZGVmYXVsdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24tby13aW4uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY29uLXgtZGVmYXVsdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ljb24teC13aW4uc3ZnIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld3MvZ2FtZVdpbmRvd1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdzL3ByZXZpZXdNb2RhbFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZpZXdzL21vZGFsV2lubmVyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld3MvcmVzZXRHYW1lVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld3MvY2hvb3NlUGxheWVyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmlld3MvY2hvb3NlR2FtZU1vZGVWaWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJpY29uLW8tZGVmYXVsdFxcXCIgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zMiAwYzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMiAwIDE3LjY3My0xNC4zMjcgMzItMzIgMzJDMTQuMzI3IDY0IDAgNDkuNjczIDAgMzIgMCAxNC4zMjcgMTQuMzI3IDAgMzIgMFptMCAxOC45NjNjLTcuMiAwLTEzLjAzNyA1LjgzNy0xMy4wMzcgMTMuMDM3IDAgNy4yIDUuODM3IDEzLjAzNyAxMy4wMzcgMTMuMDM3IDcuMiAwIDEzLjAzNy01LjgzNyAxMy4wMzctMTMuMDM3IDAtNy4yLTUuODM3LTEzLjAzNy0xMy4wMzctMTMuMDM3WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgZmlsbD1cXFwiI2YyYjEzN1xcXCIgaWQ9XFxcImljb24tby13aW5cXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMzIgMGMxNy42NzMgMCAzMiAxNC4zMjcgMzIgMzIgMCAxNy42NzMtMTQuMzI3IDMyLTMyIDMyQzE0LjMyNyA2NCAwIDQ5LjY3MyAwIDMyIDAgMTQuMzI3IDE0LjMyNyAwIDMyIDBabTAgMTguOTYzYy03LjIgMC0xMy4wMzcgNS44MzctMTMuMDM3IDEzLjAzNyAwIDcuMiA1LjgzNyAxMy4wMzcgMTMuMDM3IDEzLjAzNyA3LjIgMCAxMy4wMzctNS44MzcgMTMuMDM3LTEzLjAzNyAwLTcuMi01LjgzNy0xMy4wMzctMTMuMDM3LTEzLjAzN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJpY29uLXgtZGVmYXVsdFxcXCIgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xNS4wMDIgMS4xNDcgMzIgMTguMTQ1IDQ4Ljk5OCAxLjE0N2EzIDMgMCAwIDEgNC4yNDMgMGw5LjYxMiA5LjYxMmEzIDMgMCAwIDEgMCA0LjI0M0w0NS44NTUgMzJsMTYuOTk4IDE2Ljk5OGEzIDMgMCAwIDEgMCA0LjI0M2wtOS42MTIgOS42MTJhMyAzIDAgMCAxLTQuMjQzIDBMMzIgNDUuODU1IDE1LjAwMiA2Mi44NTNhMyAzIDAgMCAxLTQuMjQzIDBMMS4xNDcgNTMuMjRhMyAzIDAgMCAxIDAtNC4yNDNMMTguMTQ1IDMyIDEuMTQ3IDE1LjAwMmEzIDMgMCAwIDEgMC00LjI0M2w5LjYxMi05LjYxMmEzIDMgMCAwIDEgNC4yNDMgMFpcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgZmlsbD1cXFwiIzMxYzNiZFxcXCIgaWQ9XFxcImljb24teC13aW5cXFwiIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMTUuMDAyIDEuMTQ3IDMyIDE4LjE0NSA0OC45OTggMS4xNDdhMyAzIDAgMCAxIDQuMjQzIDBsOS42MTIgOS42MTJhMyAzIDAgMCAxIDAgNC4yNDNMNDUuODU1IDMybDE2Ljk5OCAxNi45OThhMyAzIDAgMCAxIDAgNC4yNDNsLTkuNjEyIDkuNjEyYTMgMyAwIDAgMS00LjI0MyAwTDMyIDQ1Ljg1NSAxNS4wMDIgNjIuODUzYTMgMyAwIDAgMS00LjI0MyAwTDEuMTQ3IDUzLjI0YTMgMyAwIDAgMSAwLTQuMjQzTDE4LjE0NSAzMiAxLjE0NyAxNS4wMDJhMyAzIDAgMCAxIDAtNC4yNDNsOS42MTItOS42MTJhMyAzIDAgMCAxIDQuMjQzIDBaXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBUeXBlIGZvciBTdGF0ZVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlVHlwZSB7XHJcbiAgY3VycmVudFBsYXllcjogc3RyaW5nO1xyXG4gIGZpcnN0VHVybjogc3RyaW5nO1xyXG4gIGNwdVR1cm46IGJvb2xlYW5cclxuICBwbGF5ZXJzOiB7XHJcbiAgICBwbGF5ZXIxOiBzdHJpbmc7XHJcbiAgICBwbGF5ZXIyOiBzdHJpbmc7XHJcbiAgfTtcclxuICB3aG9XaW5UdXJuOiB7XHJcbiAgICBYX1dJTjogYm9vbGVhbjtcclxuICAgIE9fV0lOOiBib29sZWFuO1xyXG4gICAgdGllczogYm9vbGVhbjtcclxuICB9O1xyXG4gIGdhbWU6IHtcclxuICAgIGdhbWVUeXBlOiBzdHJpbmc7XHJcbiAgICBwbGF5ZXJUdXJuOiBzdHJpbmc7XHJcbiAgICBwbGF5ZXJzUG9pbnRzOiB7XHJcbiAgICAgIFhfcG9pbnRzOiBudW1iZXJbXTtcclxuICAgICAgT19wb2ludHM6IG51bWJlcltdO1xyXG4gICAgfTtcclxuICAgIHBsYXllcnNXaW5UdXJuOiB7XHJcbiAgICAgIFhfdHVybjogbnVtYmVyO1xyXG4gICAgICB0aWVzOiBudW1iZXI7XHJcbiAgICAgIE9fdHVybjogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBXaW5uaW5nIGNvbWJpbmF0aW9uc1xyXG5leHBvcnQgY29uc3QgV0lOTklOR19DT01CSU5BVElPTlMgPSBbXHJcbiAgWzAsIDEsIDJdLFxyXG4gIFszLCA0LCA1XSxcclxuICBbNiwgNywgOF0sXHJcbiAgWzAsIDMsIDZdLFxyXG4gIFsxLCA0LCA3XSxcclxuICBbMiwgNSwgOF0sXHJcbiAgWzAsIDQsIDhdLFxyXG4gIFsyLCA0LCA2XSxcclxuXTtcclxuXHJcbi8vIENob29zZSBQbGF5ZXIgY29uZmlnXHJcbmV4cG9ydCBlbnVtIFBsYXllckNvbmZpZyB7XHJcbiAgREVGQVVMVF9QTEFZRVIgPSBcIlhcIixcclxuICBQTEFZRVJfWCA9IFwiWFwiLFxyXG4gIFBMQVlFUl9PID0gXCJPXCIsXHJcbn1cclxuXHJcbi8vIEdhbWUgbW9kZSBjb25maWdcclxuZXhwb3J0IGVudW0gR2FtZUNvbmZpZyB7XHJcbiAgREVGQVVMVCA9IFwiXCIsXHJcbiAgUExBWUVSX1ZTX0NQVSA9IFwiQ1BVXCIsXHJcbiAgUExBWUVSX1ZTX1BMQVlFUiA9IFwiUFZQXCIsXHJcbn1cclxuXHJcbi8vIEdhbWUgdHVybiBhbmQgcG9pbnRzIGNvdW50ZXJcclxuZXhwb3J0IGVudW0gR2FtZVR1cm4ge1xyXG4gIERFRkFVTFRfVFVSTiA9IFwiWFwiLFxyXG4gIFhfVFVSTiA9IFwiWFwiLFxyXG4gIE9fVFVSTiA9IFwiT1wiLFxyXG59XHJcblxyXG4vLyBHYW1lIHBvaW50c1xyXG5leHBvcnQgZW51bSBHYW1lUG9pbnRzIHtcclxuICBYX1BPSU5UUyA9IDAsXHJcbiAgT19QT0lOVFMgPSAwLFxyXG4gIFRJRVMgPSAwLFxyXG59XHJcblxyXG4vLyBDU1MgQ2xhc3NcclxuZXhwb3J0IGVudW0gQ3NzQ2xhc3Mge1xyXG4gIEhPVkVSX0RFRkFVTFQgPSBcInNlbGVjdGVkLWJvYXJkLW1hcmstWFwiLFxyXG4gIEhPVkVSX1ggPSBcImJvYXJkLVhcIixcclxuICBIT1ZFUl9PID0gXCJib2FyZC1PXCIsXHJcbiAgU0VMRUNURURfWCA9IFwic2VsZWN0ZWQtYnktWFwiLFxyXG4gIFNFTEVDVEVEX08gPSBcInNlbGVjdGVkLWJ5LU9cIixcclxufVxyXG5cclxuLy8gV2lubmVyXHJcbmV4cG9ydCBlbnVtIFdpbm5lciB7XHJcbiAgV0lOTkVSX1ggPSBcIlhcIixcclxuICBXSU5ORVJfTyA9IFwiT1wiLFxyXG4gIFRJRSA9IFwidGllXCIsXHJcbiAgREVGQVVMVF9XSU5ORVIgPSBcIlwiLFxyXG59XHJcbiIsImltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBXSU5OSU5HX0NPTUJJTkFUSU9OUyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFycmF5c0NvbnRhaW5TYW1lRWxlbWVudHMgPSBmdW5jdGlvbiAoXHJcbiAgYXJyYXkxOiBudW1iZXJbXSxcclxuICBhcnJheTI6IG51bWJlcltdXHJcbikge1xyXG4gIGNvbnN0IGZyZXF1ZW5jeUNvdW50ZXIxOiBhbnkgPSB7fTtcclxuICBjb25zdCBmcmVxdWVuY3lDb3VudGVyMjogYW55ID0ge307XHJcblxyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnJheTEpIHtcclxuICAgIGZyZXF1ZW5jeUNvdW50ZXIxW2VsZW1lbnRdID0gKGZyZXF1ZW5jeUNvdW50ZXIxW2VsZW1lbnRdIHx8IDApICsgMTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnJheTIpIHtcclxuICAgIGZyZXF1ZW5jeUNvdW50ZXIyW2VsZW1lbnRdID0gKGZyZXF1ZW5jeUNvdW50ZXIyW2VsZW1lbnRdIHx8IDApICsgMTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIGZyZXF1ZW5jeUNvdW50ZXIxKSB7XHJcbiAgICBpZiAoIShrZXkgaW4gZnJlcXVlbmN5Q291bnRlcjIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChmcmVxdWVuY3lDb3VudGVyMVtrZXldICE9PSBmcmVxdWVuY3lDb3VudGVyMltrZXldKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLy8gQ2hlY2sgc3RhdGVcclxuZXhwb3J0IGNvbnN0IGNoZWNrQ29uZGl0aW9uID0gZnVuY3Rpb24gKGRhdGE6IFN0YXRlVHlwZSkge1xyXG4gIHJldHVybiBkYXRhLndob1dpblR1cm4uT19XSU4gfHwgZGF0YS53aG9XaW5UdXJuLlhfV0lOIHx8IGRhdGEud2hvV2luVHVybi50aWVzO1xyXG59O1xyXG5cclxuLy8gRmlsdGVyIGFyclxyXG5leHBvcnQgY29uc3QgZmluZFdpbkJveCA9IGZ1bmN0aW9uIChpbnB1dEFycmF5OiBhbnkpOiBudW1iZXJbXSB7XHJcbiAgcmV0dXJuIFdJTk5JTkdfQ09NQklOQVRJT05TLnJlZHVjZSgocmVzdWx0OiBhbnksIGNvbWJpbmF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjb21iaW5hdGlvbi5maWx0ZXIoKG51bTogYW55KSA9PlxyXG4gICAgICBpbnB1dEFycmF5LmluY2x1ZGVzKG51bSlcclxuICAgICk7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW9uLmxlbmd0aCA9PT0gY29tYmluYXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmludGVyc2VjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0sIFtdKTtcclxufTtcclxuXHJcbi8vIEF1dG9iaW5kIERlY29yYXRvclxyXG5leHBvcnQgZnVuY3Rpb24gQXV0b2JpbmQoXzogYW55LCBfMjogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgY29uc3QgYWRqRGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgIGNvbnN0IGJvdW5kRk4gPSBvcmlnaW5hbE1ldGhvZC5iaW5kKHRoaXMpO1xyXG4gICAgICByZXR1cm4gYm91bmRGTjtcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gYWRqRGVzY3JpcHRvcjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIFBsYXllckNvbmZpZyxcclxuICBHYW1lQ29uZmlnLFxyXG4gIEdhbWVUdXJuLFxyXG4gIFN0YXRlVHlwZSxcclxuICBXaW5uZXIsXHJcbiAgV0lOTklOR19DT01CSU5BVElPTlMsXHJcbn0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGFycmF5c0NvbnRhaW5TYW1lRWxlbWVudHMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG4vLyBHYW1lIHN0YXRlXHJcbmV4cG9ydCBjb25zdCBzdGF0ZTogU3RhdGVUeXBlID0ge1xyXG4gIGN1cnJlbnRQbGF5ZXI6IFBsYXllckNvbmZpZy5ERUZBVUxUX1BMQVlFUixcclxuICBmaXJzdFR1cm46IFBsYXllckNvbmZpZy5QTEFZRVJfWCxcclxuICBjcHVUdXJuOiBmYWxzZSxcclxuICBwbGF5ZXJzOiB7XHJcbiAgICBwbGF5ZXIxOiBQbGF5ZXJDb25maWcuUExBWUVSX08sXHJcbiAgICBwbGF5ZXIyOiBQbGF5ZXJDb25maWcuUExBWUVSX1gsXHJcbiAgfSxcclxuICB3aG9XaW5UdXJuOiB7XHJcbiAgICBYX1dJTjogZmFsc2UsXHJcbiAgICBPX1dJTjogZmFsc2UsXHJcbiAgICB0aWVzOiBmYWxzZSxcclxuICB9LFxyXG4gIGdhbWU6IHtcclxuICAgIGdhbWVUeXBlOiBHYW1lQ29uZmlnLkRFRkFVTFQsXHJcbiAgICBwbGF5ZXJUdXJuOiBHYW1lVHVybi5ERUZBVUxUX1RVUk4sXHJcbiAgICBwbGF5ZXJzUG9pbnRzOiB7XHJcbiAgICAgIFhfcG9pbnRzOiBbXSxcclxuICAgICAgT19wb2ludHM6IFtdLFxyXG4gICAgfSxcclxuICAgIHBsYXllcnNXaW5UdXJuOiB7XHJcbiAgICAgIFhfdHVybjogMCxcclxuICAgICAgdGllczogMCxcclxuICAgICAgT190dXJuOiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuLy8gVXBsb2FkIGN1cnJlbnRQbGF5ZXIgc3RhdHVzXHJcbmV4cG9ydCBjb25zdCBsb2FkUGxheWVyID0gZnVuY3Rpb24gKGN1cnJlbnRQbGF5ZXI6IHN0cmluZykge1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBcIk9cIikge1xyXG4gICAgc3RhdGUucGxheWVycy5wbGF5ZXIxID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgc3RhdGUucGxheWVycy5wbGF5ZXIyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9YO1xyXG4gIH1cclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gXCJYXCIpIHtcclxuICAgIHN0YXRlLnBsYXllcnMucGxheWVyMSA9IFBsYXllckNvbmZpZy5QTEFZRVJfWDtcclxuICAgIHN0YXRlLnBsYXllcnMucGxheWVyMiA9IFBsYXllckNvbmZpZy5QTEFZRVJfTztcclxuICB9XHJcbn07XHJcblxyXG4vLyBVcGxvYWQgR2FtZSBzdGF0dXNcclxuZXhwb3J0IGNvbnN0IGxvYWRHYW1lID0gZnVuY3Rpb24gKGdhbWVNb2RlOiBzdHJpbmcpIHtcclxuICBnYW1lTW9kZSA9PT0gXCJQVlBcIlxyXG4gICAgPyAoc3RhdGUuZ2FtZS5nYW1lVHlwZSA9IEdhbWVDb25maWcuUExBWUVSX1ZTX1BMQVlFUilcclxuICAgIDogKHN0YXRlLmdhbWUuZ2FtZVR5cGUgPSBHYW1lQ29uZmlnLlBMQVlFUl9WU19DUFUpO1xyXG59O1xyXG5cclxuLy8gVXBsb2FkIFBvaW50XHJcbmV4cG9ydCBjb25zdCBsb2FkUG9pbnRzID0gZnVuY3Rpb24gKHBvaW50OiBudW1iZXIpIHtcclxuICAvLyBDaGVjayBQbGF5ZXJcclxuICBpZiAoc3RhdGUuY3VycmVudFBsYXllciA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YKSB7XHJcbiAgICAvLyBQdXNoIFggcG9pbnQgdG8gYXJyYXlcclxuICAgIHN0YXRlLmdhbWUucGxheWVyc1BvaW50cy5YX3BvaW50cy5wdXNoKHBvaW50KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgY3VycmVudFBsYXllclxyXG4gICAgc3RhdGUuY3VycmVudFBsYXllciA9IFBsYXllckNvbmZpZy5QTEFZRVJfTztcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gUHVzaCBPIHBvaW50IHRvIGFycmF5XHJcbiAgICBzdGF0ZS5nYW1lLnBsYXllcnNQb2ludHMuT19wb2ludHMucHVzaChwb2ludCk7XHJcblxyXG4gICAgLy8gQ2hhbmdlIGN1cnJlbnRQbGF5ZXJcclxuICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXJDb25maWcuUExBWUVSX1g7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQ2hlY2sgV2lubmVyXHJcbmV4cG9ydCBjb25zdCBjaGVja1dpbm5lciA9IGZ1bmN0aW9uIChwbGF5ZXJBcnI6IG51bWJlcltdKSB7XHJcbiAgcmV0dXJuIFdJTk5JTkdfQ09NQklOQVRJT05TLnNvbWUoKGNvbWJpbmF0aW9uczogbnVtYmVyW10pID0+IHtcclxuICAgIHJldHVybiBhcnJheXNDb250YWluU2FtZUVsZW1lbnRzKGNvbWJpbmF0aW9ucywgcGxheWVyQXJyKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIExvYWQgd2lubmVyXHJcbmV4cG9ydCBjb25zdCBsb2FkV2lubmVyID0gZnVuY3Rpb24gKHdpbm5lcjogc3RyaW5nKSB7XHJcbiAgaWYgKHdpbm5lciA9PT0gV2lubmVyLldJTk5FUl9YKSB7XHJcbiAgICBzdGF0ZS53aG9XaW5UdXJuLlhfV0lOID0gdHJ1ZTtcclxuICAgIHN0YXRlLmdhbWUucGxheWVyc1dpblR1cm4uWF90dXJuKys7XHJcbiAgfVxyXG4gIGlmICh3aW5uZXIgPT09IFdpbm5lci5XSU5ORVJfTykge1xyXG4gICAgc3RhdGUud2hvV2luVHVybi5PX1dJTiA9IHRydWU7XHJcbiAgICBzdGF0ZS5nYW1lLnBsYXllcnNXaW5UdXJuLk9fdHVybisrO1xyXG4gIH1cclxuICBpZiAod2lubmVyID09PSBXaW5uZXIuVElFKSB7XHJcbiAgICBzdGF0ZS53aG9XaW5UdXJuLnRpZXMgPSB0cnVlO1xyXG4gICAgc3RhdGUuZ2FtZS5wbGF5ZXJzV2luVHVybi50aWVzKys7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gTmV3IFJvdW5kXHJcbmV4cG9ydCBjb25zdCBuZXdSb3VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICBjaG9vc2VGaXJzdFR1cm4oKTtcclxuICBlZGl0RGF0YSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0VHVybiA9IGZ1bmN0aW9uICgpIHtcclxuICBlZGl0RGF0YSgpO1xyXG4gIHJlc2V0Rmlyc3RUdXJuKCk7XHJcbn07XHJcblxyXG4vLyBGaXJzdCB0dXJuIGNob2ljZVxyXG5leHBvcnQgY29uc3QgcmVzZXRGaXJzdFR1cm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHN0YXRlLmdhbWUuZ2FtZVR5cGUgPT09IEdhbWVDb25maWcuUExBWUVSX1ZTX1BMQVlFUikge1xyXG4gICAgaWYgKHN0YXRlLmZpcnN0VHVybiA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YKSB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXJDb25maWcuUExBWUVSX1g7XHJcbiAgICAgIHN0YXRlLmdhbWUucGxheWVyVHVybiA9IEdhbWVUdXJuLlhfVFVSTjtcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5maXJzdFR1cm4gPT09IFBsYXllckNvbmZpZy5QTEFZRVJfTykge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5PX1RVUk47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChzdGF0ZS5nYW1lLmdhbWVUeXBlID09PSBHYW1lQ29uZmlnLlBMQVlFUl9WU19DUFUpIHtcclxuICAgIC8vIFhcclxuICAgIGlmIChcclxuICAgICAgc3RhdGUuZmlyc3RUdXJuID09PSBQbGF5ZXJDb25maWcuUExBWUVSX1ggJiZcclxuICAgICAgc3RhdGUucGxheWVycy5wbGF5ZXIyID09PSBQbGF5ZXJDb25maWcuUExBWUVSX1hcclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9YO1xyXG4gICAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5YX1RVUk47XHJcbiAgICAgIHN0YXRlLmNwdVR1cm4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhdGUuZmlyc3RUdXJuID09PSBQbGF5ZXJDb25maWcuUExBWUVSX1ggJiZcclxuICAgICAgc3RhdGUucGxheWVycy5wbGF5ZXIxID09PSBQbGF5ZXJDb25maWcuUExBWUVSX1hcclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9YO1xyXG4gICAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5YX1RVUk47XHJcbiAgICB9XHJcbiAgICAvLyBPXHJcbiAgICBlbHNlIGlmIChcclxuICAgICAgc3RhdGUuZmlyc3RUdXJuID09PSBQbGF5ZXJDb25maWcuUExBWUVSX08gJiZcclxuICAgICAgc3RhdGUucGxheWVycy5wbGF5ZXIyID09PSBQbGF5ZXJDb25maWcuUExBWUVSX09cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5PX1RVUk47XHJcbiAgICAgIHN0YXRlLmNwdVR1cm4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhdGUuZmlyc3RUdXJuID09PSBQbGF5ZXJDb25maWcuUExBWUVSX08gJiZcclxuICAgICAgc3RhdGUucGxheWVycy5wbGF5ZXIxID09PSBQbGF5ZXJDb25maWcuUExBWUVSX09cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5PX1RVUk47XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gRWRpdCBkYXRhXHJcbmNvbnN0IGVkaXREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gIHN0YXRlLndob1dpblR1cm4uWF9XSU4gPSBmYWxzZTtcclxuICBzdGF0ZS53aG9XaW5UdXJuLk9fV0lOID0gZmFsc2U7XHJcbiAgc3RhdGUud2hvV2luVHVybi50aWVzID0gZmFsc2U7XHJcbiAgc3RhdGUuZ2FtZS5wbGF5ZXJzUG9pbnRzLlhfcG9pbnRzID0gW107XHJcbiAgc3RhdGUuZ2FtZS5wbGF5ZXJzUG9pbnRzLk9fcG9pbnRzID0gW107XHJcbn07XHJcblxyXG4vLyBDaG9vc2UgZmlyc3QgdHVyblxyXG5jb25zdCBjaG9vc2VGaXJzdFR1cm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHN0YXRlLmZpcnN0VHVybiA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YKSB7XHJcbiAgICBzdGF0ZS5jdXJyZW50UGxheWVyID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgc3RhdGUuZmlyc3RUdXJuID0gUGxheWVyQ29uZmlnLlBMQVlFUl9PO1xyXG4gICAgc3RhdGUuZ2FtZS5wbGF5ZXJUdXJuID0gR2FtZVR1cm4uT19UVVJOO1xyXG4gIH0gZWxzZSBpZiAoc3RhdGUuZmlyc3RUdXJuID09PSBQbGF5ZXJDb25maWcuUExBWUVSX08pIHtcclxuICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXIgPSBQbGF5ZXJDb25maWcuUExBWUVSX1g7XHJcbiAgICBzdGF0ZS5maXJzdFR1cm4gPSBQbGF5ZXJDb25maWcuUExBWUVSX1g7XHJcbiAgICBzdGF0ZS5nYW1lLnBsYXllclR1cm4gPSBHYW1lVHVybi5YX1RVUk47XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDc3NDbGFzcywgU3RhdGVUeXBlLCBQbGF5ZXJDb25maWcsIEdhbWVDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBpY29uV2luWERlZmF1bHQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29uLXgtZGVmYXVsdC5zdmdcIjtcclxuaW1wb3J0IGljb25XaW5PRGVmYXVsdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb24tby1kZWZhdWx0LnN2Z1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5nYW1lLWJvYXJkXCJcclxuICApISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHN0YXRpYyBnYW1lQm94OiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PiA9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLWJveFwiKSE7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgZGF0YTogU3RhdGVUeXBlO1xyXG5cclxuICAvLyBJbml0IEhvdmVyXHJcbiAgc3RhdGljIHVwZGF0ZVVJKGRhdGE6IFN0YXRlVHlwZSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMudXBkYXRlUGxheWVyVUkoKTtcclxuICAgIHRoaXMuc2hvd1dob1R1cm4oKTtcclxuICAgIHRoaXMuYWRkU2VsZWN0Q2xhc3NMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5hZGRIb3Zlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gQmxvY2sgZXZlbnRcclxuICBzdGF0aWMgYmxvY2tFdmVudEhhbmRsaW5nKCkge1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9jay1ldmVudFwiKTtcclxuICB9XHJcblxyXG4gIC8vIHVuIGJsb2NrIGV2ZW50XHJcbiAgc3RhdGljIHVuQmxvY2tFdmVudEhhbmRsaW5kKCkge1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9jay1ldmVudFwiKTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBwb2ludCB0byBhcnJheVxyXG4gIHN0YXRpYyBhZGRCb3hIYW5kbGVyKFxyXG4gICAgaGFuZGxlcjogRnVuY3Rpb24sXHJcbiAgICBjb3VudEJveDogRnVuY3Rpb24gPSB0aGlzLnNlbGVjdGVkQm94Q291bnRlclxyXG4gICkge1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZTogRXZlbnQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHBvaW50ID0gK3RhcmdldC5pZDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRhcmdldC5kYXRhc2V0LnNlbGVjdCA9PT0gXCJTRUxFQ1RFRFwiIHx8XHJcbiAgICAgICAgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC1ib3hcIilcclxuICAgICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtT1wiKSAmJlxyXG4gICAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtWFwiKVxyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBlbHNlIHRhcmdldC5kYXRhc2V0LnNlbGVjdCA9IFwiU0VMRUNURURcIjtcclxuICAgICAgY291bnRCb3goKSA9PT0gdHJ1ZSA/IGhhbmRsZXIocG9pbnQsIHRydWUpIDogaGFuZGxlcihwb2ludCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyBBZGQgQ3B1IGNob2ljZSBsb2dpY1xyXG4gIHN0YXRpYyBhZGRDcHVDaG9pY2UoZGF0YTogU3RhdGVUeXBlKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgY29uc3QgW2NsYXNzTmFtZV0gPSB0aGlzLnNlbGVjdENsYXNzKCk7XHJcbiAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKHRoaXMuZ2FtZUJveCk7XHJcbiAgICBsZXQgcmFuZG9tSWQ7XHJcbiAgICBkbyB7XHJcbiAgICAgIHJhbmRvbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgfSB3aGlsZSAoIWFycltyYW5kb21JZF0gfHwgYXJyW3JhbmRvbUlkXS5kYXRhc2V0LnNlbGVjdCA9PT0gXCJTRUxFQ1RFRFwiKTtcclxuICAgIGNvbnN0IHJhbmRvbUVsZW1lbnQgPSBhcnJbcmFuZG9tSWRdO1xyXG4gICAgY29uc3QgaWRPZkVsZW1lbnQgPSArYXJyW3JhbmRvbUlkXS5pZDtcclxuICAgIHJhbmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgcmFuZG9tRWxlbWVudC5kYXRhc2V0LnNlbGVjdCA9IFwiU0VMRUNURURcIjtcclxuICAgIHJldHVybiBpZE9mRWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIENvdW50ZXIgKGRyYXcpXHJcbiAgc3RhdGljIHNlbGVjdGVkQm94Q291bnRlcigpIHtcclxuICAgIGNvbnN0IGdhbWVib3ggPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtYm94XCIpKSE7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZ2FtZWJveCkge1xyXG4gICAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIGEgaW5zdGFuY2Ugb2YgSFRNTEVsZW1lbnRcclxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGEgYXR0cmlidXRlIGRhdGFzZXQgZXFhdWFscyB2YWx1ZSBcIlNFTEVDVEVEXCJcclxuICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YXNldCB8fCBlbGVtZW50LmRhdGFzZXQuc2VsZWN0ICE9PSBcIlNFTEVDVEVEXCIpIHtcclxuICAgICAgICAgIC8vIElmIGVsZW1lbnQgbm90IGhhcyBhIGF0dHJpYnV0ZSBkYXRhc2V0IGVxdWFscyB2YWxlIFwiU0VMRUNURURcIiwgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiBldmVyeSBlbGVtZW50cyBhY2hpdmUgdGhlIGNvbmRpdGlvbiwgcmV0dXJuIHRydWVcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHdpbiBDTGFzc1xyXG4gIHN0YXRpYyBhZGRXaW5DbGFzcyhudW1iZXJzQXJyYXk6IG51bWJlcltdKSB7XHJcbiAgICBudW1iZXJzQXJyYXkuZm9yRWFjaCgobnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFN0cmluZyhudW1iZXIpKSE7XHJcbiAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtYnktWFwiKSkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpbi1YXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndpbi1PXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFNob3cgcGxheWVyIHR1cm5cclxuICBwcml2YXRlIHN0YXRpYyBzaG93V2hvVHVybigpIHtcclxuICAgIGNvbnN0IGdhbWVwbGF5VHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLmdhbWVwbGF5X190dXJuXCJcclxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZ2FtZXBsYXlUdXJuLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLmdlbmVyYXRlTWFya3VwVHVybigpO1xyXG4gICAgZ2FtZXBsYXlUdXJuLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xyXG4gIH1cclxuXHJcbiAgLy8gR2FuYXJldGUgdHVybiBtYXJrdXBcclxuICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZU1hcmt1cFR1cm4oKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfTylcclxuICAgICAgcmV0dXJuIGAgICAgICBcclxuICAgIDxzdmcgY2xhc3M9XCJnYW1wbGF5X190dXJuLWljb25cIj5cclxuICAgICR7aWNvbldpbk9EZWZhdWx0fVxyXG4gICAgPC9zdmc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImdhbXBsYXlfX3R1cm5fX3RleHRcIj4gVFVSTjwvc3Bhbj5gO1xyXG4gICAgZWxzZVxyXG4gICAgICByZXR1cm4gYFxyXG4gICAgPHN2ZyBjbGFzcz1cImdhbXBsYXlfX3R1cm4taWNvblwiPlxyXG4gICAgJHtpY29uV2luWERlZmF1bHR9XHJcbiAgICA8L3N2Zz5cclxuICAgIDxzcGFuIGNsYXNzPVwiZ2FtcGxheV9fdHVybl9fdGV4dFwiPiBUVVJOPC9zcGFuPmA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlUGxheWVyVUkoKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PLXRleHRcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcGxheWVyWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuWC10ZXh0XCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlmICh0aGlzLmRhdGEuZ2FtZS5nYW1lVHlwZSA9PT0gR2FtZUNvbmZpZy5QTEFZRVJfVlNfUExBWUVSKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjEgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgICAgID8gKHBsYXllck8udGV4dENvbnRlbnQgPSBcIk8gKFAxKVwiKVxyXG4gICAgICAgIDogKHBsYXllck8udGV4dENvbnRlbnQgPSBcIk8gKFAyKVwiKTtcclxuICAgICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMiA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YXHJcbiAgICAgICAgPyAocGxheWVyWC50ZXh0Q29udGVudCA9IFwiWCAoUDIpXCIpXHJcbiAgICAgICAgOiAocGxheWVyWC50ZXh0Q29udGVudCA9IFwiWCAoUDEpXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMSA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9PXHJcbiAgICAgICAgPyAocGxheWVyTy50ZXh0Q29udGVudCA9IFwiTyAoWU9VKVwiKVxyXG4gICAgICAgIDogKHBsYXllck8udGV4dENvbnRlbnQgPSBcIk8gKENQVSlcIik7XHJcbiAgICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfWFxyXG4gICAgICAgID8gKHBsYXllclgudGV4dENvbnRlbnQgPSBcIlggKENQVSlcIilcclxuICAgICAgICA6IChwbGF5ZXJYLnRleHRDb250ZW50ID0gXCJYIChZT1UpXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIFNlbGVjdCBDbGFzc1xyXG4gIHByaXZhdGUgc3RhdGljIGFkZFNlbGVjdENsYXNzTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmdhbWVCb3guZm9yRWFjaCgoYm94OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkQ2xpY2tCb3gpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgaG92ZXIgYmV0d2VlbiBYIGFuZCBPXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYWRkSG92ZXJMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmdhbWVCb3guZm9yRWFjaCgoYm94OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xyXG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5tb3VzZUVudGVySGFuZGxlcik7XHJcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5tb3VzZU91dEhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgRXZlbnRcclxuICBwcml2YXRlIHN0YXRpYyBhZGRDbGlja0JveCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgdGhpcy5ib3hDbGljayhldmVudCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRW50ZXIgaW5pdFxyXG4gIHByaXZhdGUgc3RhdGljIG1vdXNlRW50ZXJIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXIoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIC8vIE91dCBpbml0XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbW91c2VPdXRIYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLmhhbmRsZU1vdXNlT3V0KGV2ZW50KTtcclxuICB9O1xyXG5cclxuICAvLyBFbnRlclxyXG4gIHByaXZhdGUgc3RhdGljIGhhbmRsZU1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IFtjbGFzc05hbWUsIGRlbENsYXNzXSA9IHRoaXMuaG92ZXJDbGFzcygpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaWYgKHRhcmdldC5kYXRhc2V0LnNlbGVjdCA9PT0gXCJTRUxFQ1RFRFwiKSByZXR1cm47XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZGVsQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLy8gT3V0XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlTW91c2VPdXQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IFtjbGFzc05hbWUsIGRlbENsYXNzXSA9IHRoaXMuaG92ZXJDbGFzcygpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGRlbENsYXNzKTtcclxuICB9XHJcblxyXG4gIC8vIEV2ZW50IENsaWNrXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYm94Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IFtjbGFzc05hbWUsIGRlbENsYXNzXSA9IHRoaXMuc2VsZWN0Q2xhc3MoKTtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0LmRhdGFzZXQuc2VsZWN0ID09PSBcIlNFTEVDVEVEXCIgfHxcclxuICAgICAgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC1ib3hcIilcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGRlbENsYXNzKTtcclxuICB9XHJcblxyXG4gIC8vIENob29zZSBIb3ZlciBDbGFzc1xyXG4gIHN0YXRpYyBob3ZlckNsYXNzKCkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID1cclxuICAgICAgdGhpcy5kYXRhLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgICAgID8gQ3NzQ2xhc3MuSE9WRVJfT1xyXG4gICAgICAgIDogQ3NzQ2xhc3MuSE9WRVJfWDtcclxuICAgIC8vIERlbCBjbGFzc05hbWVcclxuICAgIGNvbnN0IGRlbENsYXNzID1cclxuICAgICAgdGhpcy5kYXRhLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgICAgID8gQ3NzQ2xhc3MuSE9WRVJfWFxyXG4gICAgICAgIDogQ3NzQ2xhc3MuSE9WRVJfTztcclxuICAgIHJldHVybiBbY2xhc3NOYW1lLCBkZWxDbGFzc107XHJcbiAgfVxyXG5cclxuICAvLyBDaG9vc2UgU2VsZWN0IGNsYXNzXHJcbiAgc3RhdGljIHNlbGVjdENsYXNzKCkge1xyXG4gICAgLy8gQ2xhc3MgTmFtZVxyXG4gICAgY29uc3QgY2xhc3NOYW1lID1cclxuICAgICAgdGhpcy5kYXRhLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgICAgID8gQ3NzQ2xhc3MuU0VMRUNURURfT1xyXG4gICAgICAgIDogQ3NzQ2xhc3MuU0VMRUNURURfWDtcclxuICAgIC8vIERlbCBjbGFzc05hbWVcclxuICAgIGNvbnN0IGRlbENsYXNzID1cclxuICAgICAgdGhpcy5kYXRhLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgICAgID8gQ3NzQ2xhc3MuU0VMRUNURURfWFxyXG4gICAgICAgIDogQ3NzQ2xhc3MuU0VMRUNURURfTztcclxuICAgIHJldHVybiBbY2xhc3NOYW1lLCBkZWxDbGFzc107XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdNb2RhbFZpZXcge1xyXG4gIHBhcmVudEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gIG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGRhdGE6IFN0YXRlVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5tb2RhbC13aW5uZXItd2luZG93XCJcclxuICAgICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpISBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRoaXMuZGF0YSA9IHt9IGFzIFN0YXRlVHlwZTtcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbChkYXRhOiBTdGF0ZVR5cGUpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICBjb25zdCBtYXJrdXAgPSB0aGlzLmdlbmVyYXRlTWFya3VwKCk7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlXCIpO1xyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZVwiKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVUkoZGF0YTogU3RhdGVUeXBlKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgLy8gU2VsZWN0IGNvdW50ZXJzXHJcbiAgICBjb25zdCBjb3VudGVyWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuWFwiKSE7XHJcbiAgICBjb25zdCBjb3VudGVyTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT1wiKSE7XHJcbiAgICBjb25zdCBjb3V0ZXJUaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aWVzXCIpITtcclxuICAgIGNvbnN0IGdhbWVCb3g6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+ID1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1ib3hcIikhO1xyXG4gICAgLy8gVXBkYXRlIFVJXHJcbiAgICBjb3VudGVyWC50ZXh0Q29udGVudCA9IGAke2RhdGEuZ2FtZS5wbGF5ZXJzV2luVHVybi5YX3R1cm59YDtcclxuICAgIGNvdW50ZXJPLnRleHRDb250ZW50ID0gYCR7ZGF0YS5nYW1lLnBsYXllcnNXaW5UdXJuLk9fdHVybn1gO1xyXG4gICAgY291dGVyVGllcy50ZXh0Q29udGVudCA9IGAke2RhdGEuZ2FtZS5wbGF5ZXJzV2luVHVybi50aWVzfWA7XHJcbiAgICAvLyBTaG93IG1vZGFsIHdpbmRvd1xyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZVwiKTtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVcIik7XHJcbiAgICAvLyBSZXNldCBVSSBhbGwgYm94ZXNcclxuICAgIGdhbWVCb3guZm9yRWFjaCgoYm94OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xyXG4gICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWJ5LVhcIik7XHJcbiAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtYnktT1wiKTtcclxuICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW4tWFwiKTtcclxuICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW4tT1wiKTtcclxuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2VsZWN0XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVNYXJrdXAoKTogYW55IHt9XHJcbn1cclxuIiwiLy8gSWNvbnNcclxuaW1wb3J0IGljb25XaW5YIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbi14LXdpbi5zdmdcIjtcclxuaW1wb3J0IGljb25XaW5PIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbi1vLXdpbi5zdmdcIjtcclxuaW1wb3J0IFByZXZpZXdNb2RhbFZpZXcgZnJvbSBcIi4vcHJldmlld01vZGFsVmlld1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29uZmlnLCBQbGF5ZXJDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmNsYXNzIE1vZGFsVmlldyBleHRlbmRzIFByZXZpZXdNb2RhbFZpZXcge1xyXG4gIC8vIE1vZGFsIGhhbmRsZXJcclxuICBhZGRNb2RhbEhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAvLyBOZXh0IHJvdW5kIGJ0blxyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5leHRfX3JvdW5kX19idG5cIikpIHtcclxuICAgICAgICBjb25zdCBuZXh0Um91bmQgPSB0cnVlO1xyXG4gICAgICAgIGhhbmRsZXIobmV4dFJvdW5kLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUXVpdCBidG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJxdWl0X19idG5cIikpIHtcclxuICAgICAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYm9hcmQtc2VjdGlvblwiKSE7XHJcbiAgICAgICAgY29uc3QgbmV3R2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctZ2FtZVwiKSE7XHJcbiAgICAgICAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZVwiKTtcclxuICAgICAgICBuZXdHYW1lQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlXCIpO1xyXG4gICAgICAgIGNvbnN0IG5leHRSb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIGhhbmRsZXIobmV4dFJvdW5kLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIENvbnRlbnQgaW4gbW9kYWxcclxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVNYXJrdXAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cIm1vZGFsX193aW5uZXItdGV4dFwiPiR7dGhpcy5nZW5lcmF0ZU1hcmt1cEhlYWRlcigpfTwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcbiAgICAgICR7dGhpcy5nZW5lcmF0ZU1hcmt1cFRleHQoKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19idXR0b25zXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX2xlZnQgcXVpdF9fYnRuXCI+UVVJVDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuX19yaWdodCBuZXh0X19yb3VuZF9fYnRuXCI+TkVYVCBST1VORDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+YDtcclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIE1hcmt1cCB0ZXh0XHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmt1cFRleHQoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLndob1dpblR1cm4uT19XSU4pXHJcbiAgICAgIHJldHVybiBgXHJcbiAgIDxzdmcgY2xhc3M9XCJtb2RhbF9fd2lubmVyX19pY29uXCIke2ljb25XaW5PfTwvc3ZnPlxyXG4gICA8c3BhbiBjbGFzcz1cIm1vZGFsX19oZWFkZXJfX3RleHQgT19fd2luX190ZXh0XCI+IFRBS0VTIFRIRSBST1VORCA8L3NwYW4+XHJcbiAgICBgO1xyXG4gICAgaWYgKHRoaXMuZGF0YS53aG9XaW5UdXJuLlhfV0lOKVxyXG4gICAgICByZXR1cm4gYFxyXG4gICAgPHN2ZyBjbGFzcz1cIm1vZGFsX193aW5uZXJfX2ljb25cIj4ke2ljb25XaW5YfTwvc3ZnPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtb2RhbF9faGVhZGVyX190ZXh0IFhfX3dpbl9fdGV4dFwiPiBUQUtFUyBUSEUgUk9VTkQgPC9zcGFuPlxyXG4gICAgYDtcclxuICAgIGlmICh0aGlzLmRhdGEud2hvV2luVHVybi50aWVzKVxyXG4gICAgICByZXR1cm4gYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJtb2RhbF9faGVhZGVyX190ZXh0IHJlc3RhcnRfX3RleHRcIj4gUk9VTkQgVElFRCA8L3NwYW4+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGBgO1xyXG4gIH1cclxuXHJcbiAgLy8gR2VuZXJhdGUgaGVhZGVyIHRleHQgXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmt1cEhlYWRlcigpIHtcclxuICAgIC8vIFBWUFxyXG4gICAgaWYgKHRoaXMuZGF0YS5nYW1lLmdhbWVUeXBlID09PSBHYW1lQ29uZmlnLlBMQVlFUl9WU19QTEFZRVIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2lubmVyQWxnb3JpdG0oXCJQTEFZRVIgMSBXSU5TIVwiLCBcIlBMQVlFUiAyIFdJTlMhXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gQ1BVXHJcbiAgICBpZiAodGhpcy5kYXRhLmdhbWUuZ2FtZVR5cGUgPT09IEdhbWVDb25maWcuUExBWUVSX1ZTX0NQVSkge1xyXG4gICAgICByZXR1cm4gdGhpcy53aW5uZXJBbGdvcml0bShcIllPVSBXT04hXCIsIFwiT0ggTk8sIFlPVSBMT1NULi4uXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBgO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lubmVyIGFsZ29yaXRtXHJcbiAgcHJpdmF0ZSB3aW5uZXJBbGdvcml0bShzdHJpbmcxOiBzdHJpbmcsIHN0cmluZzI6IHN0cmluZykge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRhdGEud2hvV2luVHVybi5PX1dJTiA9PT0gdHJ1ZSAmJlxyXG4gICAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID09PSBQbGF5ZXJDb25maWcuUExBWUVSX09cclxuICAgIClcclxuICAgICAgcmV0dXJuIHN0cmluZzE7XHJcbiAgICBlbHNlIGlmIChcclxuICAgICAgdGhpcy5kYXRhLndob1dpblR1cm4uT19XSU4gPT09IHRydWUgJiZcclxuICAgICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMiA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9PXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBzdHJpbmcyO1xyXG4gICAgLy8gWFxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRhdGEud2hvV2luVHVybi5YX1dJTiA9PT0gdHJ1ZSAmJlxyXG4gICAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID09PSBQbGF5ZXJDb25maWcuUExBWUVSX1hcclxuICAgIClcclxuICAgICAgcmV0dXJuIHN0cmluZzE7XHJcbiAgICBlbHNlIGlmIChcclxuICAgICAgdGhpcy5kYXRhLndob1dpblR1cm4uWF9XSU4gPT09IHRydWUgJiZcclxuICAgICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMiA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBzdHJpbmcyO1xyXG5cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE1vZGFsVmlldygpO1xyXG4iLCIvLyBpbXBvcnQgeyBBdXRvYmluZCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBQcmV2aWV3TW9kYWxWaWV3IGZyb20gXCIuL3ByZXZpZXdNb2RhbFZpZXdcIjtcclxuaW1wb3J0IHsgQXV0b2JpbmQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY2xhc3MgUmVzZXRHYW1lVmlldyBleHRlbmRzIFByZXZpZXdNb2RhbFZpZXcge1xyXG4gIHByaXZhdGUgcmVzZXRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnJlc2V0LWdhbWVcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBhZGRSZW5kZXJNb2RhbChoYW5kbGVyOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5yZXNldEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaGFuZGxlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRSZXN0YXJ0TW9kYWxIYW5kbGVyKFxyXG4gICAgaGFuZGxlcjogRnVuY3Rpb24sXHJcbiAgICBoaWRkZW5Nb2RhbDogRnVuY3Rpb24gPSB0aGlzLnRvZ2dsZVdpbmRvd1xyXG4gICkge1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZTogRXZlbnQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIC8vUmVzdGFydCBHYW1lXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzdGFydFwiKSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRSb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNhbmNsZUJ0biA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0VHVybiA9IHRydWU7XHJcbiAgICAgICAgaGFuZGxlcihuZXh0Um91bmQsIGNhbmNsZUJ0biwgcmVzZXRUdXJuKTtcclxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2FuY2xlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFJvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2FuY2xlQnRuID0gdHJ1ZTtcclxuICAgICAgICBoYW5kbGVyKG5leHRSb3VuZCwgY2FuY2xlQnRuKTtcclxuICAgICAgICBoaWRkZW5Nb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEhpZGRlIFdpbmRvd1xyXG4gIEBBdXRvYmluZFxyXG4gIHByb3RlY3RlZCB0b2dnbGVXaW5kb3coKSB7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlXCIpO1xyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZVwiKTtcclxuICB9XHJcblxyXG4gIC8vIGdlbmVyYXRlIHJlc2V0IG1vZGFsXHJcbiAgcHJvdGVjdGVkIGdlbmVyYXRlTWFya3VwKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibW9kYWxfX2hlYWRlcl9fdGV4dCByZXN0YXJ0X190ZXh0XCI+IFJFU1RBUlQgR0FNRT8gPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2J1dHRvbnNcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bl9fbGVmdCBjYW5jbGVcIj5OTywgQ0FOQ0xFPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG5fX3JpZ2h0IHJlc3RhcnRcIj5ZRVMsIFJFU1RBUlQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PmA7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXNldEdhbWVWaWV3KCk7XHJcbiIsImltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvb3NlUGxheWVyIHtcclxuICBwcml2YXRlIHN0YXRpYyBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnBsYXllci1jaG9vc2VcIlxyXG4gICkhIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIHN0YXRpYyBkYXRhOiBTdGF0ZVR5cGU7XHJcblxyXG4gIC8vIEFkZCBjaG9vc2UgcGxheWVyXHJcbiAgc3RhdGljIGFkZENob29zZVBsYXllckhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGU6IEV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KFwiLlBMQVlFUlwiKSkgcmV0dXJuO1xyXG4gICAgICBjb25zdCBwbGF5ZXIgPSB0YXJnZXQuY2xvc2VzdChcIi5QTEFZRVJcIik/LmlkO1xyXG4gICAgICBjb25zdCBwbGF5ZXJYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXJ0X194LW1hcmtcIik7XHJcbiAgICAgIGNvbnN0IHBsYXllck8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc3RhcnRfX28tbWFya1wiKTtcclxuICAgICAgaWYgKHBsYXllciA9PSBcIlhcIikge1xyXG4gICAgICAgIHBsYXllclg/LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICBwbGF5ZXJPPy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxheWVyWD8uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIHBsYXllck8/LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW5kbGVyKHBsYXllcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBDaG9vc0dhbWVNb2RlIGZyb20gXCIuL1ZpZXdzL2Nob29zZUdhbWVNb2RlVmlld1wiO1xyXG5pbXBvcnQgKiBhcyBtb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgR2FtZVdpbmRvdyBmcm9tIFwiLi9WaWV3cy9nYW1lV2luZG93Vmlld1wiO1xyXG5pbXBvcnQgeyBHYW1lQ29uZmlnLCBQbGF5ZXJDb25maWcsIFdpbm5lciB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTW9kYWxWaWV3IGZyb20gXCIuL1ZpZXdzL21vZGFsV2lubmVyVmlld1wiO1xyXG5pbXBvcnQgUmVzZXRHYW1lVmlldyBmcm9tIFwiLi9WaWV3cy9yZXNldEdhbWVWaWV3XCI7XHJcbmltcG9ydCBDaG9vc2VQbGF5ZXIgZnJvbSBcIi4vVmlld3MvY2hvb3NlUGxheWVyVmlld1wiO1xyXG5pbXBvcnQgeyBjaGVja0NvbmRpdGlvbiwgZmluZFdpbkJveCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbi8vIENob29zZSBQbGF5ZXJcclxuY29uc3QgY29udHJvbENob29zZVBsYXllciA9IGZ1bmN0aW9uIChwbGF5ZXI6IHN0cmluZykge1xyXG4gIG1vZGVsLmxvYWRQbGF5ZXIocGxheWVyKTtcclxufTtcclxuXHJcbi8vIENob29zZSBHYW1lIE1vZGVcclxuY29uc3QgY29udHJvbENob29zZUdNID0gZnVuY3Rpb24gKGdhbWVNb2RlOiBzdHJpbmcpIHtcclxuICBtb2RlbC5sb2FkR2FtZShnYW1lTW9kZSk7XHJcbiAgLy8gUFZQIE1PREVcclxuICBpZiAobW9kZWwuc3RhdGUuZ2FtZS5nYW1lVHlwZSA9PT0gR2FtZUNvbmZpZy5QTEFZRVJfVlNfUExBWUVSKSB7XHJcbiAgICAvLyBJbml0IGhvdmVyXHJcbiAgICBjb250cm9sVUkoKTtcclxuICAgIEdhbWVXaW5kb3cuYWRkQm94SGFuZGxlcihjb250cm9sR2FtZVN0YXR1cyk7XHJcbiAgfSBlbHNlIGlmIChtb2RlbC5zdGF0ZS5nYW1lLmdhbWVUeXBlID09PSBHYW1lQ29uZmlnLlBMQVlFUl9WU19DUFUpIHtcclxuICAgIHBsYXlDUFUoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2cobW9kZWwuc3RhdGUpO1xyXG59O1xyXG5cclxuLy8gY29udHJvbGwgQWRkIHBvaW50c1xyXG5jb25zdCBjb250cm9sUG9pbnQgPSBmdW5jdGlvbiAocG9pbnQ6IG51bWJlcikge1xyXG4gIG1vZGVsLmxvYWRQb2ludHMocG9pbnQpO1xyXG59O1xyXG5cclxuLy8gQ29udHJvbCBXaW5uZXJcclxuY29uc3QgY29udHJvbFdpbm5lciA9IGZ1bmN0aW9uICh0aWU6IGJvb2xlYW4pIHtcclxuICAvLyAgTyB3aW5cclxuICBpZiAobW9kZWwuY2hlY2tXaW5uZXIobW9kZWwuc3RhdGUuZ2FtZS5wbGF5ZXJzUG9pbnRzLk9fcG9pbnRzKSkge1xyXG4gICAgbW9kZWwubG9hZFdpbm5lcihXaW5uZXIuV0lOTkVSX08pO1xyXG4gICAgLy8gQWRkIHdpbiBjbGFzc1xyXG4gICAgR2FtZVdpbmRvdy5ibG9ja0V2ZW50SGFuZGxpbmcoKTtcclxuICAgIEdhbWVXaW5kb3cuYWRkV2luQ2xhc3MoZmluZFdpbkJveChtb2RlbC5zdGF0ZS5nYW1lLnBsYXllcnNQb2ludHMuT19wb2ludHMpKTtcclxuICAgIGNvbnRyb2xTaG93TW9kYWwoKTtcclxuICB9XHJcbiAgLy8gWCB3aW5cclxuICBpZiAobW9kZWwuY2hlY2tXaW5uZXIobW9kZWwuc3RhdGUuZ2FtZS5wbGF5ZXJzUG9pbnRzLlhfcG9pbnRzKSkge1xyXG4gICAgbW9kZWwubG9hZFdpbm5lcihXaW5uZXIuV0lOTkVSX1gpO1xyXG4gICAgLy8gQWRkIHdpbiBjbGFzc1xyXG4gICAgR2FtZVdpbmRvdy5ibG9ja0V2ZW50SGFuZGxpbmcoKTtcclxuICAgIEdhbWVXaW5kb3cuYWRkV2luQ2xhc3MoZmluZFdpbkJveChtb2RlbC5zdGF0ZS5nYW1lLnBsYXllcnNQb2ludHMuWF9wb2ludHMpKTtcclxuICAgIGNvbnRyb2xTaG93TW9kYWwoKTtcclxuICB9XHJcbiAgLy8gQ29udHJvbCB0aWVcclxuICBpZiAodGllID09PSB0cnVlKSB7XHJcbiAgICBHYW1lV2luZG93LmJsb2NrRXZlbnRIYW5kbGluZygpO1xyXG4gICAgbW9kZWwubG9hZFdpbm5lcihXaW5uZXIuVElFKTtcclxuICAgIGNvbnRyb2xTaG93TW9kYWwoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBDb250cm9sZSBHYW1lIFN0YXR1c1xyXG5jb25zdCBjb250cm9sR2FtZVN0YXR1cyA9IGZ1bmN0aW9uIChwb2ludDogbnVtYmVyLCB0aWU6IGJvb2xlYW4pIHtcclxuICBpZiAobW9kZWwuc3RhdGUuY3B1VHVybiA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gIGNvbnRyb2xQb2ludChwb2ludCk7XHJcbiAgY29udHJvbFVJKCk7XHJcbiAgY29udHJvbFdpbm5lcih0aWUpO1xyXG59O1xyXG5cclxuLy8gSGFuZGxlclxyXG5jb25zdCBjcHVIYW5kbGVyID0gZnVuY3Rpb24gKHBvaW50OiBudW1iZXIsIHRpZTogYm9vbGVhbikge1xyXG4gIGNvbnRyb2xHYW1lU3RhdHVzKHBvaW50LCB0aWUpO1xyXG4gIGlmIChjaGVja0NvbmRpdGlvbihtb2RlbC5zdGF0ZSkpIHJldHVybjtcclxuICBydW5HYW1lTG9vcCgpO1xyXG59O1xyXG5cclxuLy8gQ1BVXHJcbmNvbnN0IHBsYXlDUFUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgR2FtZVdpbmRvdy51cGRhdGVVSShtb2RlbC5zdGF0ZSk7XHJcbiAgaWYgKG1vZGVsLnN0YXRlLnBsYXllcnMucGxheWVyMSA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9PKSB7XHJcbiAgICBjcHVDaG9pY2UoKTtcclxuICB9XHJcbiAgaWYgKG1vZGVsLnN0YXRlLnBsYXllcnMucGxheWVyMSA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YKSB7XHJcbiAgICBwbGF5ZXJDaG9pY2UoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBHYW1lIGxvb3BcclxuY29uc3QgcnVuR2FtZUxvb3AgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgR2FtZVdpbmRvdy5ibG9ja0V2ZW50SGFuZGxpbmcoKTtcclxuICBtb2RlbC5zdGF0ZS5jcHVUdXJuID0gdHJ1ZTtcclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdoaWxlIChtb2RlbC5zdGF0ZS5jcHVUdXJuKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBHYW1lV2luZG93LmFkZENwdUNob2ljZShtb2RlbC5zdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGllID0gR2FtZVdpbmRvdy5zZWxlY3RlZEJveENvdW50ZXIoKTtcclxuICAgICAgICBtb2RlbC5zdGF0ZS5jcHVUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgY29udHJvbEdhbWVTdGF0dXMocG9pbnQsIHRpZSk7XHJcbiAgICAgICAgcmVzb2x2ZShcInJlc29sdmVkXCIpO1xyXG4gICAgICAgIGNvbnRyb2xVbkJsb2NrSGFuZGxlcigpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIENvbnRyb2wgTW9kYWxcclxuY29uc3QgY29udHJvbE5leHRSb3VuZE9yUmVzZXQgPSBmdW5jdGlvbiAoXHJcbiAgbmV4dFJvdW5kOiBib29sZWFuLFxyXG4gIGNhbmNsZUJ0bjogYm9vbGVhbixcclxuICByZXN0ZXRUdXJuOiBib29sZWFuXHJcbikge1xyXG4gIGlmIChjYW5jbGVCdG4gPT09IGZhbHNlKSB7XHJcbiAgICBpZiAobmV4dFJvdW5kID09PSB0cnVlKSB7XHJcbiAgICAgIG1vZGVsLm5ld1JvdW5kKCk7XHJcbiAgICAgIGNwdU5leHRSb3VuZCgpO1xyXG4gICAgICBNb2RhbFZpZXcudXBkYXRlVUkobW9kZWwuc3RhdGUpO1xyXG4gICAgICBjb250cm9sVUkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3RldFR1cm4gPT09IHRydWUgPyBjb250cm9sUmVzZXRHYW1lKCkgOiBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICB9IGVsc2UgcmV0dXJuO1xyXG59O1xyXG5cclxuLy8gQ29udHJvbCBDUFUgbmV4dCBSb3VuZFxyXG5jb25zdCBjcHVOZXh0Um91bmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKG1vZGVsLnN0YXRlLmdhbWUuZ2FtZVR5cGUgPT09IEdhbWVDb25maWcuUExBWUVSX1ZTX0NQVSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBtb2RlbC5zdGF0ZS5wbGF5ZXJzLnBsYXllcjEgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfTyAmJlxyXG4gICAgICBtb2RlbC5zdGF0ZS5jdXJyZW50UGxheWVyID09PSBQbGF5ZXJDb25maWcuUExBWUVSX09cclxuICAgICkge1xyXG4gICAgICBwbGF5ZXJDaG9pY2UoKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgbW9kZWwuc3RhdGUucGxheWVycy5wbGF5ZXIxID09PSBQbGF5ZXJDb25maWcuUExBWUVSX08gJiZcclxuICAgICAgbW9kZWwuc3RhdGUuY3VycmVudFBsYXllciA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YXHJcbiAgICApIHtcclxuICAgICAgY3B1Q2hvaWNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIG1vZGVsLnN0YXRlLnBsYXllcnMucGxheWVyMSA9PT0gUGxheWVyQ29uZmlnLlBMQVlFUl9YICYmXHJcbiAgICAgIG1vZGVsLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IFBsYXllckNvbmZpZy5QTEFZRVJfT1xyXG4gICAgKSB7XHJcbiAgICAgIGNwdUNob2ljZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vIEhvdmVyXHJcbmNvbnN0IGNvbnRyb2xVSSA9IGZ1bmN0aW9uICgpIHtcclxuICBHYW1lV2luZG93LnVwZGF0ZVVJKG1vZGVsLnN0YXRlKTtcclxufTtcclxuXHJcbi8vIFNob3cgTW9kYWxcclxuY29uc3QgY29udHJvbFNob3dNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIE1vZGFsVmlldy5zaG93TW9kYWwobW9kZWwuc3RhdGUpO1xyXG4gIH0sIDcwMCk7XHJcbn07XHJcblxyXG4vLyBCbG9jayBIYW5kbGVyXHJcbmNvbnN0IGNvbnRyb2xVbkJsb2NrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIEdhbWVXaW5kb3cudW5CbG9ja0V2ZW50SGFuZGxpbmQoKTtcclxuICB9LCAxNTAwKTtcclxufTtcclxuXHJcbi8vIFNob3cgcmVzZXQgTW9kYWxcclxuY29uc3QgY29udHJvbFJlbmRlclJlc2V0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgUmVzZXRHYW1lVmlldy5zaG93TW9kYWwobW9kZWwuc3RhdGUpO1xyXG4gIFJlc2V0R2FtZVZpZXcuYWRkUmVzdGFydE1vZGFsSGFuZGxlcihjb250cm9sTmV4dFJvdW5kT3JSZXNldCk7XHJcbn07XHJcblxyXG4vLyBIYXJkIFJlc2V0XHJcbmNvbnN0IGNvbnRyb2xSZXNldEdhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbW9kZWwucmVzZXRUdXJuKCk7XHJcbiAgTW9kYWxWaWV3LnVwZGF0ZVVJKG1vZGVsLnN0YXRlKTtcclxuICBjb250cm9sVUkoKTtcclxuICBpZiAobW9kZWwuc3RhdGUuY3B1VHVybiA9PT0gdHJ1ZSkgY3B1Q2hvaWNlKCk7XHJcbn07XHJcblxyXG4vLyBwbGF5ZXIgQ2hvaWNlXHJcbmNvbnN0IHBsYXllckNob2ljZSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb250cm9sVW5CbG9ja0hhbmRsZXIoKTtcclxuICBjb250cm9sVUkoKTtcclxuICBHYW1lV2luZG93LmFkZEJveEhhbmRsZXIoY3B1SGFuZGxlcik7XHJcbn07XHJcblxyXG4vLyBDcHUgY2hvaWNlXHJcbmNvbnN0IGNwdUNob2ljZSA9IGZ1bmN0aW9uICgpIHtcclxuICBHYW1lV2luZG93LmJsb2NrRXZlbnRIYW5kbGluZygpO1xyXG4gIHJ1bkdhbWVMb29wKCk7XHJcbiAgR2FtZVdpbmRvdy5hZGRCb3hIYW5kbGVyKGNwdUhhbmRsZXIpO1xyXG59O1xyXG5cclxuLy8gSW5pdCBhcHBcclxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBIYW5kbGVyc1xyXG4gIENob29zR2FtZU1vZGUuYWRkR2FtZU1vZGVIYW5kbGVyKGNvbnRyb2xDaG9vc2VHTSk7XHJcbiAgQ2hvb3NlUGxheWVyLmFkZENob29zZVBsYXllckhhbmRsZXIoY29udHJvbENob29zZVBsYXllcik7XHJcbiAgLy8gUmVzZXQgR2FtZSBNb2RhbFxyXG4gIFJlc2V0R2FtZVZpZXcuYWRkUmVuZGVyTW9kYWwoY29udHJvbFJlbmRlclJlc2V0TW9kYWwpO1xyXG4gIC8vIFdpbiBnYW1lIE1vZGFsXHJcbiAgTW9kYWxWaWV3LmFkZE1vZGFsSGFuZGxlcihjb250cm9sTmV4dFJvdW5kT3JSZXNldCk7XHJcbn07XHJcbmluaXQoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvb3NHYW1lTW9kZSB7XHJcbiAgc3RhdGljIGFkZEdhbWVNb2RlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZTogRXZlbnQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IG5ld0dhbWVXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1nYW1lXCIpITtcclxuICAgICAgY29uc3QgR2FtZVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ib2FyZC1zZWN0aW9uXCIpITtcclxuICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FtZS1tb2RlXCIpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGdhbWVNb2RlID0gdGFyZ2V0LmlkO1xyXG4gICAgICBoYW5kbGVyKGdhbWVNb2RlKTtcclxuICAgICAgbmV3R2FtZVdpbmRvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVcIik7XHJcbiAgICAgIEdhbWVXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlXCIpO1xyXG4gICAgICByZXR1cm4gZ2FtZU1vZGU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIldJTk5JTkdfQ09NQklOQVRJT05TIiwiUGxheWVyQ29uZmlnIiwiR2FtZUNvbmZpZyIsIkdhbWVUdXJuIiwiR2FtZVBvaW50cyIsIkNzc0NsYXNzIiwiV2lubmVyIiwiZmluZFdpbkJveCIsImlucHV0QXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJjb21iaW5hdGlvbiIsImludGVyc2VjdGlvbiIsImZpbHRlciIsIm51bSIsImluY2x1ZGVzIiwibGVuZ3RoIiwicHVzaCIsInN0YXRlIiwiY3VycmVudFBsYXllciIsIkRFRkFVTFRfUExBWUVSIiwiZmlyc3RUdXJuIiwiUExBWUVSX1giLCJjcHVUdXJuIiwicGxheWVycyIsInBsYXllcjEiLCJQTEFZRVJfTyIsInBsYXllcjIiLCJ3aG9XaW5UdXJuIiwiWF9XSU4iLCJPX1dJTiIsInRpZXMiLCJnYW1lIiwiZ2FtZVR5cGUiLCJERUZBVUxUIiwicGxheWVyVHVybiIsIkRFRkFVTFRfVFVSTiIsInBsYXllcnNQb2ludHMiLCJYX3BvaW50cyIsIk9fcG9pbnRzIiwicGxheWVyc1dpblR1cm4iLCJYX3R1cm4iLCJPX3R1cm4iLCJjaGVja1dpbm5lciIsInBsYXllckFyciIsInNvbWUiLCJjb21iaW5hdGlvbnMiLCJhcnJheTEiLCJhcnJheTIiLCJmcmVxdWVuY3lDb3VudGVyMSIsImZyZXF1ZW5jeUNvdW50ZXIyIiwiZWxlbWVudCIsImFycmF5c0NvbnRhaW5TYW1lRWxlbWVudHMiLCJsb2FkV2lubmVyIiwid2lubmVyIiwiV0lOTkVSX1giLCJXSU5ORVJfTyIsIlRJRSIsImVkaXREYXRhIiwiR2FtZVdpbmRvdyIsInVwZGF0ZVVJIiwiZGF0YSIsInRoaXMiLCJ1cGRhdGVQbGF5ZXJVSSIsInNob3dXaG9UdXJuIiwiYWRkU2VsZWN0Q2xhc3NMaXN0ZW5lciIsImFkZEhvdmVyTGlzdGVuZXJzIiwiYmxvY2tFdmVudEhhbmRsaW5nIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInVuQmxvY2tFdmVudEhhbmRsaW5kIiwicmVtb3ZlIiwiYWRkQm94SGFuZGxlciIsImhhbmRsZXIiLCJjb3VudEJveCIsInNlbGVjdGVkQm94Q291bnRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicG9pbnQiLCJpZCIsImRhdGFzZXQiLCJzZWxlY3QiLCJjb250YWlucyIsImFkZENwdUNob2ljZSIsImNsYXNzTmFtZSIsInNlbGVjdENsYXNzIiwiYXJyIiwiQXJyYXkiLCJmcm9tIiwiZ2FtZUJveCIsInJhbmRvbUlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tRWxlbWVudCIsImlkT2ZFbGVtZW50IiwiZ2FtZWJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkhUTUxFbGVtZW50IiwiYWRkV2luQ2xhc3MiLCJudW1iZXJzQXJyYXkiLCJmb3JFYWNoIiwibnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJTdHJpbmciLCJnYW1lcGxheVR1cm4iLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibWFya3VwIiwiZ2VuZXJhdGVNYXJrdXBUdXJuIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGxheWVyTyIsInBsYXllclgiLCJQTEFZRVJfVlNfUExBWUVSIiwidGV4dENvbnRlbnQiLCJib3giLCJhZGRDbGlja0JveCIsIm1vdXNlRW50ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwiaGFuZGxlTW91c2VFbnRlciIsImV2ZW50IiwiZGVsQ2xhc3MiLCJob3ZlckNsYXNzIiwiaGFuZGxlTW91c2VPdXQiLCJib3hDbGljayIsIkhPVkVSX08iLCJIT1ZFUl9YIiwiU0VMRUNURURfTyIsIlNFTEVDVEVEX1giLCJQcmV2aWV3TW9kYWxWaWV3IiwiY29uc3RydWN0b3IiLCJvdmVybGF5Iiwic2hvd01vZGFsIiwiZ2VuZXJhdGVNYXJrdXAiLCJjb3VudGVyWCIsImNvdW50ZXJPIiwiY291dGVyVGllcyIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZE1vZGFsSGFuZGxlciIsImdhbWVCb2FyZCIsIm5ld0dhbWVCb2FyZCIsImdlbmVyYXRlTWFya3VwSGVhZGVyIiwiZ2VuZXJhdGVNYXJrdXBUZXh0Iiwid2lubmVyQWxnb3JpdG0iLCJQTEFZRVJfVlNfQ1BVIiwic3RyaW5nMSIsInN0cmluZzIiLCJSZXNldEdhbWVWaWV3IiwicmVzZXRHYW1lQnRuIiwiYWRkUmVuZGVyTW9kYWwiLCJhZGRSZXN0YXJ0TW9kYWxIYW5kbGVyIiwiaGlkZGVuTW9kYWwiLCJ0b2dnbGVXaW5kb3ciLCJfIiwiXzIiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJ2YWx1ZSIsImNvbmZpZ3VyYWJsZSIsImJpbmQiLCJDaG9vc2VQbGF5ZXIiLCJhZGRDaG9vc2VQbGF5ZXJIYW5kbGVyIiwiY2xvc2VzdCIsInBsYXllciIsImNvbnRyb2xHYW1lU3RhdHVzIiwidGllIiwiY29udHJvbFBvaW50IiwiY29udHJvbFVJIiwiY29udHJvbFNob3dNb2RhbCIsImNvbnRyb2xXaW5uZXIiLCJjcHVIYW5kbGVyIiwicnVuR2FtZUxvb3AiLCJwbGF5Q1BVIiwiY3B1Q2hvaWNlIiwicGxheWVyQ2hvaWNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29udHJvbFVuQmxvY2tIYW5kbGVyIiwiY29udHJvbE5leHRSb3VuZE9yUmVzZXQiLCJuZXh0Um91bmQiLCJjYW5jbGVCdG4iLCJyZXN0ZXRUdXJuIiwiT19UVVJOIiwiWF9UVVJOIiwiY3B1TmV4dFJvdW5kIiwiY29udHJvbFJlc2V0R2FtZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWRkR2FtZU1vZGVIYW5kbGVyIiwid2luZG93IiwibmV3R2FtZVdpbmRvdyIsImdhbWVNb2RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
