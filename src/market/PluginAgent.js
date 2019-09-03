class PluginAgent {
    plugins = [
        {
            name: "미세먼지",
            image: "https://image.ytn.co.kr/general/jpg/2018/1109/201811090019476768_t.jpg",
            detail: "https://www.ytn.co.kr/_ln/0108_201811090019476768",
            download: "https://www.google.com/search?q=%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&newwindow=1&rlz=1C1SQJL_koKR776KR776&source=lnms&sa=X&ved=0ahUKEwjd_4y1jK3kAhUAyYsBHbOmAvQQ_AUIDCgA&biw=958&bih=1047&dpr=1"
        },
        {
            name: "날씨",
            image: "https://lh3.googleusercontent.com/HMwdVgyFtuQQU-aU6Dwpej5RdPocFF3XdJXeo2qyjzZXc4i0HYJEoZA77p9SNms-IZZ0",
            detail: "https://www.weather.go.kr/weather/main.jsp",
            download: "https://www.google.com/search?newwindow=1&biw=958&bih=1047&ei=hmZqXe7hJOHGmAWy2rTQDA&q=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&oq=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&gs_l=psy-ab.3..0j0i5i30l9.24853.29126..29379...3.2..2.130.1187.3j8......0....1..gws-wiz.......0i71j0i8i10i30j0i67j0i30j0i8i30.VgChfaxM_zY&ved=0ahUKEwjuvK3XjK3kAhVhI6YKHTItDcoQ4dUDCAs&uact=5"
        },
        {
            name: "급식정보",
            image: "data:image/jpeg;base64,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",
            detail: "http://www.fsnews.co.kr/news/articleView.html?idxno=34745",
            download: "https://www.google.com/search?newwindow=1&biw=958&bih=1047&ei=3WZqXZONCd2Hr7wP-fegkA4&q=%EA%B8%89%EC%8B%9D+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&oq=%EA%B8%89%EC%8B%9D+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&gs_l=psy-ab.3...13060.21091..21341...10.1..2.149.1750.4j12......0....1..gws-wiz.....6..0i71j35i39j0i131j0j0i10i3j0i67j0i3j0i30j0i5i30j33i160.65yxdNlgHMw&ved=0ahUKEwjT78-Aja3kAhXdw4sBHfk7COIQ4dUDCAs&uact=5"
        },
        {
            name: "미세먼지",
            image: "https://image.ytn.co.kr/general/jpg/2018/1109/201811090019476768_t.jpg",
            detail: "https://www.ytn.co.kr/_ln/0108_201811090019476768",
            download: "https://www.google.com/search?q=%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&newwindow=1&rlz=1C1SQJL_koKR776KR776&source=lnms&sa=X&ved=0ahUKEwjd_4y1jK3kAhUAyYsBHbOmAvQQ_AUIDCgA&biw=958&bih=1047&dpr=1"
        },
        {
            name: "날씨",
            image: "https://lh3.googleusercontent.com/HMwdVgyFtuQQU-aU6Dwpej5RdPocFF3XdJXeo2qyjzZXc4i0HYJEoZA77p9SNms-IZZ0",
            detail: "https://www.weather.go.kr/weather/main.jsp",
            download: "https://www.google.com/search?newwindow=1&biw=958&bih=1047&ei=hmZqXe7hJOHGmAWy2rTQDA&q=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&oq=%EB%82%A0%EC%94%A8+%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&gs_l=psy-ab.3..0j0i5i30l9.24853.29126..29379...3.2..2.130.1187.3j8......0....1..gws-wiz.......0i71j0i8i10i30j0i67j0i30j0i8i30.VgChfaxM_zY&ved=0ahUKEwjuvK3XjK3kAhVhI6YKHTItDcoQ4dUDCAs&uact=5"
        }
    ];

    fetchPlugins = (cb) => {
        setTimeout(() => {
            cb && cb(this.plugins);
        }, 1000);
    }
}

export default new PluginAgent();
