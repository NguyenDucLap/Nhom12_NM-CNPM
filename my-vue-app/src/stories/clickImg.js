import { defineStore } from "pinia";
import { list } from "postcss";

const list_data = [
    {
        "index": 0,
        "image": "../assets/game1/img4.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img4.PNG",
        "status": 1,
    },
    {
        "index": 1,
        "image": "../assets/game1/img5.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img5.PNG",
        "status": 1,
    },
    {
        "index": 2,
        "image": "../assets/game1/img6.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img6.PNG",
        "status": 1,
    },
    {
        "index": 3,
        "image": "../assets/game1/img7.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img7.PNG",
        "status": 1,
    },
    {
        "index": 4,
        "image": "../assets/game1/img8.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img8.PNG",
        "status": 1,
    },
    {
        "index": 5,
        "image": "../assets/game1/img9.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img9.PNG",
        "status": 1,
    },
    {
        "index": 6,
        "image": "../assets/game1/img10.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img10.PNG",
        "status": 1,
    },
    {
        "index": 7,
        "image": "../assets/game1/img11.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img11.PNG",
        "status": 1,
    },
    {
        "index": 8,
        "image": "../assets/game1/img12.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img12.PNG",
        "status": 1,
    },
    {
        "index": 9,
        "image": "../assets/game1/img13.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img13.PNG",
        "status": 1,
    },
    {
        "index": 10,
        "image": "../assets/game1/img14.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img14.PNG",
        "status": 1,
    },
    {
        "index": 11,
        "image": "../assets/game1/img15.PNG",
        "hidden": "../assets/game1/before_open.png",
        "pass": "../assets/game1/img15.PNG",
        "status": 1,
    },
];

let list_data_copy = JSON.parse(JSON.stringify(list_data));
let sort_list_data_copy = list_data_copy.sort(func);

let easy_list = sort_list_data_copy.slice(0, 3);
let normal_list = sort_list_data_copy.slice(0, 6);
let hard_list = sort_list_data_copy;

function slice_random(b) {
    console.log("line 109");
    return list_data_2.slice(0, b);
}

function func() {
    return 0.5 - Math.random();
}

export const ImgStore = defineStore({
    id: 'img',
    state: () => ({
        click_2: false,              // l???n click th??? 2
        list: [],       // danh s??ch img
        is_check_index: -1,             // index c???a ???nh khi ???????c click
        last_index_check: -1,           // index sau khi click l???n 1
        last_id: -1,                // id sau khi click l???n 1
        total_score: 0,                 // t???ng ??i???m ?????t ???????c = ??i???m +  (th???i gian c??n l???i)*10 + (1/s??? l???n click) * 25000
        start_game: false,                // tr???ng th??i b???t ?????u c???a game (true l?? b???t ?????u, false l?? ??ang ?????i)
        game_status: 0,             // tr???ng th??i game khi ??ang ch??i (0 l?? ??ang ch??i, 1 l?? t???m d???ng, 2 l?? k???t th??c)
        time_play: 180,                  // th???i gian gi???i h???n m???t l?????t ch??i 
        pass_img: 0,                // s??? ???nh ???? ho??n th??nh
        score: 0,                   // ??i???m s??? nh???n ???????c m???i khi ho??n th??nh 1 c???p ???nh
        number_of_click: 0,         // t???ng s??? l???n click
        level: 0,                     // level cho game
    }),
    actions: {
        clickImg(a) {
            if (this.list[a].status != 3) {
                this.check_time_click(a);
            }

        },
        getImageUrl(link) {
            return new URL(`../../src/assets/${link}`, import.meta.url).href
        },

        // a l?? id c???a ???nh ???????c click
        check_time_click(a) {
            this.is_check_index = this.list[a].index;
            this.number_of_click++;
            if (!this.click_2) {
                this.last_id = a;
                this.click_to_img(a, 2);
                this.last_index_check = this.list[a].index;
                this.click_2 = true;
            } else {
                if (this.list[a].status == 1) {
                    this.click_to_img(a, 2);
                    if (this.is_check_index == this.last_index_check) {
                        this.time_open_img(a, 3);
                        this.time_open_img(this.last_id, 3);
                        this.pass_img++;
                        this.score += 100;
                    } else {
                        this.time_open_img(a, 1);
                        this.time_open_img(this.last_id, 1);
                    }
                } else {

                    this.time_open_img(a, 1);
                }
                this.click_2 = false;
            }
        },

        // funciton click ???nh, x l?? id, y l?? tr???ng th??i mong mu???n c???a ???nh (1 l?? ??ang ????ng, 2 l?? m???, 3 l?? ho??n th??nh)
        click_to_img(x, y) {
            this.list[x].status = y;
        },
        // ?????t th???i gian ????? m??? ???nh
        time_open_img(x, y) {
            setTimeout(() => {
                this.click_to_img(x, y);
            }, 1000);
        },
        on_start_game() {
            this.start_game = true;
            this.game_status = 0;
            window.setInterval(() => {
                if (this.game_status == 0 && this.time_play > 0 && this.pass_img < this.list.length) {
                    this.time_play--;
                }
                if (this.pass_img == this.list.length / 2 || this.time_play <= 0) {
                    this.game_status = 2;
                    if (this.pass_img != 0) {
                        this.total_score = (this.score + this.time_play * 10 + (1 / this.number_of_click) * 2500).toFixed();
                    }
                }
            }, 1000);
        },

        // click start ????? ch??i game
        click_start(a) {
            // this.on_start_game();
            this.level = a;
            localStorage.setItem('level_game', this.level);

            let list2 = [];
            let double_list = [];
            if (a == 1) {
                list2 = JSON.parse(JSON.stringify(easy_list));
                double_list = easy_list.concat(list2);

            } else if (a == 2) {
                list2 = JSON.parse(JSON.stringify(normal_list));
                double_list = normal_list.concat(list2);
            } else {
                list2 = JSON.parse(JSON.stringify(hard_list));
                double_list = hard_list.concat(list2);
            }
            let list_data_last = double_list.sort(func);
            let x = 0;
            list_data_last.map((state) => {
                state.id = x;
                x++;
            })
            this.list = list_data_last;
        },

        // click pause
        click_pause() {
            this.game_status = 1;
        },
        // click resume ????? ti???p t???c game
        click_resume() {
            this.game_status = 0;
        },
        // click reset ????? l??m m???i game
        click_reset() {
            console.log("line 231: " + localStorage.getItem('level_game'));
            // setTimeout(() => {
            //     window.location.reload();
            // }, 500)
            window.location.reload();
            
        },
        click_go_to_Home() {
            window.location.reload();
        },

        // click new game
        click_new_game() {
            this.game_status = 0;
            window.location.reload();
        },
        click_exit() {
            window.location.reload();
        }
    }
})