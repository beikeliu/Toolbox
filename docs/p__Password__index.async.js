'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [29],
  {
    18905: function (K, f, e) {
      e.r(f);
      let D = e(25359),
        v = e.n(D),
        O = e(49811),
        c = e.n(O),
        y = e(54306),
        b = e.n(y),
        U = e(24434),
        T = e(15438),
        r = e(88983),
        B = e(12068),
        L = e(49952),
        A = e(96285),
        g = e(93236),
        a = e(62086),
        I = T.Z.Title,
        j = [
          { label: '\u5927\u5199\u5B57\u6BCD', value: 'hasUpperCase' },
          { label: '\u5C0F\u5199\u5B57\u6BCD', value: 'hasLowerCase' },
          { label: '\u6570\u5B57', value: 'hasNumber' },
          { label: '\u7B26\u53F7', value: 'hasSymbol' },
        ];
      function R() {
        let C =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6,
          d =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          i =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          n =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0,
          p =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          s = '',
          u = '',
          h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          t = 'abcdefghijklmnopqrstuvwxyz',
          E = '012345678901234567890123456789',
          m = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        if (
          (d && (s += h), i && (s += t), n && (s += E), p && (s += m), s === '')
        )
          return '\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u5B57\u7B26\u7C7B\u578B';
        for (let _ = 0; _ < C; _++)
          u += s[Math.floor(Math.random() * s.length)];
        return u;
      }
      let W = function () {
        let d = r.Z.useForm(),
          i = b()(d, 1),
          n = i[0],
          p = (0, g.useState)(''),
          s = b()(p, 2),
          u = s[0],
          h = s[1],
          t = (function () {
            let E = c()(
              v()().mark(function m() {
                let _, P, l, M;
                return v()().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (o.next = 2), n.validateFields();
                      case 2:
                        (_ = n.getFieldsValue()),
                          (P = _.length),
                          (l = _.types),
                          (M = R(
                            P,
                            l.includes('hasUpperCase'),
                            l.includes('hasLowerCase'),
                            l.includes('hasNumber'),
                            l.includes('hasSymbol'),
                          )),
                          h(M);
                      case 5:
                      case 'end':
                        return o.stop();
                    }
                }, m);
              }),
            );
            return function () {
              return E.apply(this, arguments);
            };
          })();
        return (
          (0, g.useEffect)(function () {
            setTimeout(function () {
              t();
            });
          }, []),
          (0, a.jsxs)(U._z, {
            children: [
              (0, a.jsxs)(r.Z, {
                form: n,
                labelCol: { span: 4 },
                wrapperCol: { span: 24 },
                style: { maxWidth: 600 },
                autoComplete: 'off',
                children: [
                  (0, a.jsx)(r.Z.Item, {
                    label: '\u5BC6\u7801\u957F\u5EA6',
                    name: 'length',
                    required: !0,
                    initialValue: 8,
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8BF7\u8F93\u5165\u4E00\u4E2A\u4ECB\u4E8E4\u548C24\u4E4B\u95F4\u7684\u5BC6\u7801\u957F\u5EA6\uFF08\u6574\u6570\uFF09\uFF01',
                      },
                    ],
                    children: (0, a.jsx)(B.Z, {
                      min: 4,
                      max: 24,
                      precision: 0,
                    }),
                  }),
                  (0, a.jsx)(r.Z.Item, {
                    label: '\u5141\u8BB8\u7C7B\u578B',
                    name: 'types',
                    required: !0,
                    initialValue: ['hasLowerCase', 'hasNumber'],
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8BF7\u9009\u62E9\u5141\u8BB8\u7C7B\u578B\uFF01',
                      },
                    ],
                    children: (0, a.jsx)(L.Z.Group, { options: j }),
                  }),
                  (0, a.jsx)(r.Z.Item, {
                    wrapperCol: { offset: 1 },
                    children: (0, a.jsx)(A.ZP, {
                      type: 'primary',
                      htmlType: 'submit',
                      onClick: t,
                      children: '\u5F00\u59CB\u751F\u6210',
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(I, { copyable: !!u, children: u }),
            ],
          })
        );
      };
      f.default = W;
    },
  },
]);
