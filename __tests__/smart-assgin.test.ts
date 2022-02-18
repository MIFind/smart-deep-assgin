import { smartAssign } from '../src/smartAssgin'

describe('smart assign', () => {
  it('should equal', () => {
    let _new = { a: 1, b: 2, c: 3 }
    let _old = {}

    let _result = { a: 1, b: 2, c: 3 }

    smartAssign(_old, _new)

    expect(_old).toEqual(_result)
  })
  it('should equal - path assgin', () => {
    const _new = {
      'root.nodes.19.nodes.16.nodes.11.nodes.10.props.style': 'background-color:#CE1857;',
    }

    const _old = {
      root: {
        nodes: {
          '7': {
            id: 7,
            type: 'view',
            props: {
              class: 'ray-view wrapper___ftxO_',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [4, 6],
            nodes: {
              '4': {
                id: 4,
                type: 'text',
                props: { class: 'title___2oZYd', 'user-select': false, decode: false },
                children: [3],
                nodes: { '3': { id: 3, type: 'plain-text', text: 'Swiper' } },
              },
              '6': {
                id: 6,
                type: 'text',
                props: { class: 'desc___1sf9t', 'user-select': false, decode: false },
                children: [5],
                nodes: { '5': { id: 5, type: 'plain-text', text: '滑块视图容器' } },
              },
            },
          },
          '9': {
            id: 9,
            type: 'view',
            props: {
              class: 'ray-view title___3qe1V',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              textStyle: 'title___3qe1V',
              'hover-stop-propagation': false,
            },
            children: [8],
            nodes: { '8': { id: 8, type: 'plain-text', text: '受控模式' } },
          },
          '19': {
            id: 19,
            type: 'view',
            props: {
              class: 'ray-view demo___1ZEg-',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [16, 18],
            nodes: {
              '16': {
                id: 16,
                type: 'swiper',
                props: {
                  style: '',
                  class: 'ray-swiper swiper___GuUkC',
                  bindchange: '$$REMAX_METHOD_16_onChange',
                  bindanimationfinish: '$$REMAX_METHOD_16_onAnimationFinish',
                  current: 0,
                  autoplay: false,
                  circular: false,
                  duration: 500,
                  interval: 5000,
                  vertical: false,
                  'indicator-active-color': '#000',
                  'indicator-color': 'rgba(0,0,0,0.3)',
                  'indicator-dots': true,
                  'previous-margin': '0px',
                  'next-margin': '0px',
                  'display-multiple-items': 1,
                },
                children: [11, 13, 15],
                nodes: {
                  '11': {
                    id: 11,
                    type: 'swiper-item',
                    props: {},
                    children: [10],
                    nodes: {
                      '10': {
                        id: 10,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#ffffff;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '13': {
                    id: 13,
                    type: 'swiper-item',
                    props: {},
                    children: [12],
                    nodes: {
                      '12': {
                        id: 12,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#6B396E;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '15': {
                    id: 15,
                    type: 'swiper-item',
                    props: {},
                    children: [14],
                    nodes: {
                      '14': {
                        id: 14,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#71AAB3;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                },
              },
              '18': {
                id: 18,
                type: 'button',
                props: {
                  style: '',
                  class: 'ray-button button___8GjIZ',
                  'hover-class': 'button-hover___32oF-',
                  bindtap: '$$REMAX_METHOD_18_onClick',
                  disabled: false,
                  type: 'default',
                  hoverStyle: 'opacity:0.8;',
                  'hover-start-time': 20,
                  'hover-stay-time': 70,
                  size: 'default',
                  loading: false,
                  'hover-stop-propagation': false,
                },
                children: [17],
                nodes: { '17': { id: 17, type: 'plain-text', text: '手动切换' } },
              },
            },
          },
        },
        children: [7, 9, 19],
      },
      modalRoot: { children: [] },
    }

    const _result = {
      root: {
        nodes: {
          '7': {
            id: 7,
            type: 'view',
            props: {
              class: 'ray-view wrapper___ftxO_',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [4, 6],
            nodes: {
              '4': {
                id: 4,
                type: 'text',
                props: { class: 'title___2oZYd', 'user-select': false, decode: false },
                children: [3],
                nodes: { '3': { id: 3, type: 'plain-text', text: 'Swiper' } },
              },
              '6': {
                id: 6,
                type: 'text',
                props: { class: 'desc___1sf9t', 'user-select': false, decode: false },
                children: [5],
                nodes: { '5': { id: 5, type: 'plain-text', text: '滑块视图容器' } },
              },
            },
          },
          '9': {
            id: 9,
            type: 'view',
            props: {
              class: 'ray-view title___3qe1V',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              textStyle: 'title___3qe1V',
              'hover-stop-propagation': false,
            },
            children: [8],
            nodes: { '8': { id: 8, type: 'plain-text', text: '受控模式' } },
          },
          '19': {
            id: 19,
            type: 'view',
            props: {
              class: 'ray-view demo___1ZEg-',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [16, 18],
            nodes: {
              '16': {
                id: 16,
                type: 'swiper',
                props: {
                  style: '',
                  class: 'ray-swiper swiper___GuUkC',
                  bindchange: '$$REMAX_METHOD_16_onChange',
                  bindanimationfinish: '$$REMAX_METHOD_16_onAnimationFinish',
                  current: 0,
                  autoplay: false,
                  circular: false,
                  duration: 500,
                  interval: 5000,
                  vertical: false,
                  'indicator-active-color': '#000',
                  'indicator-color': 'rgba(0,0,0,0.3)',
                  'indicator-dots': true,
                  'previous-margin': '0px',
                  'next-margin': '0px',
                  'display-multiple-items': 1,
                },
                children: [11, 13, 15],
                nodes: {
                  '11': {
                    id: 11,
                    type: 'swiper-item',
                    props: {},
                    children: [10],
                    nodes: {
                      '10': {
                        id: 10,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#CE1857;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '13': {
                    id: 13,
                    type: 'swiper-item',
                    props: {},
                    children: [12],
                    nodes: {
                      '12': {
                        id: 12,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#6B396E;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '15': {
                    id: 15,
                    type: 'swiper-item',
                    props: {},
                    children: [14],
                    nodes: {
                      '14': {
                        id: 14,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#71AAB3;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                },
              },
              '18': {
                id: 18,
                type: 'button',
                props: {
                  style: '',
                  class: 'ray-button button___8GjIZ',
                  'hover-class': 'button-hover___32oF-',
                  bindtap: '$$REMAX_METHOD_18_onClick',
                  disabled: false,
                  type: 'default',
                  hoverStyle: 'opacity:0.8;',
                  'hover-start-time': 20,
                  'hover-stay-time': 70,
                  size: 'default',
                  loading: false,
                  'hover-stop-propagation': false,
                },
                children: [17],
                nodes: { '17': { id: 17, type: 'plain-text', text: '手动切换' } },
              },
            },
          },
        },
        children: [7, 9, 19],
      },
      modalRoot: { children: [] },
    }

    const res = smartAssign(_old, _new)
    expect(res).toEqual(_result)
  })

  it('should equal - 2 path object assgin', () => {
    const obj1 = {
      'root.nodes.19.nodes.16.nodes.11.nodes.10.props.style': 'background-color:#CE1857;',
    }

    const obj2 = {
      'root.nodes.19.nodes.16.nodes.11.props.style': 'background-color:#CE1857;',
    }

    const result = {
      root: {
        nodes: {
          '19': {
            nodes: {
              '16': {
                nodes: {
                  '11': {
                    nodes: { '10': { props: { style: 'background-color:#CE1857;' } } },
                    props: { style: 'background-color:#CE1857;' },
                  },
                },
              },
            },
          },
        },
      },
    }
    const res = smartAssign(obj1, obj2)

    expect(res).toEqual(result)
  })

  it('should equal - smart deep assgin', () => {
    let a = {
      root: {
        children: [7, 9, 19],
        nodes: {
          '7': {
            id: 7,
            type: 'view',
            props: {
              class: 'ray-view wrapper___ftxO_',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [4, 6],
            nodes: {
              '4': {
                id: 4,
                type: 'text',
                props: { class: 'title___2oZYd', 'user-select': false, decode: false },
                children: [3],
                nodes: { '3': { id: 3, type: 'plain-text', text: 'Swiper' } },
              },
              '6': {
                id: 6,
                type: 'text',
                props: { class: 'desc___1sf9t', 'user-select': false, decode: false },
                children: [5],
                nodes: { '5': { id: 5, type: 'plain-text', text: '滑块视图容器' } },
              },
            },
          },
          '9': {
            id: 9,
            type: 'view',
            props: {
              class: 'ray-view title___3qe1V',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              textStyle: 'title___3qe1V',
              'hover-stop-propagation': false,
            },
            children: [8],
            nodes: { '8': { id: 8, type: 'plain-text', text: '受控模式' } },
          },
          '19': {
            id: 19,
            type: 'view',
            props: {
              class: 'ray-view demo___1ZEg-',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [16, 18],
            nodes: {
              '16': {
                id: 16,
                type: 'swiper',
                props: {
                  style: '',
                  class: 'ray-swiper swiper___GuUkC',
                  bindchange: '$$REMAX_METHOD_16_onChange',
                  bindanimationfinish: '$$REMAX_METHOD_16_onAnimationFinish',
                  current: 0,
                  autoplay: false,
                  circular: false,
                  duration: 500,
                  interval: 5000,
                  vertical: false,
                  'indicator-active-color': '#000',
                  'indicator-color': 'rgba(0,0,0,0.3)',
                  'indicator-dots': true,
                  'previous-margin': '0px',
                  'next-margin': '0px',
                  'display-multiple-items': 1,
                },
                children: [11, 13, 15],
                nodes: {
                  '11': {
                    id: 11,
                    type: 'swiper-item',
                    props: {},
                    children: [10],
                    nodes: {
                      '10': {
                        id: 10,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#FFFFFF;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '13': {
                    id: 13,
                    type: 'swiper-item',
                    props: {},
                    children: [12],
                    nodes: {
                      '12': {
                        id: 12,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#FFFFFF;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '15': {
                    id: 15,
                    type: 'swiper-item',
                    props: {},
                    children: [14],
                    nodes: {
                      '14': {
                        id: 14,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#FFFFFF;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                },
              },
              '18': {
                id: 18,
                type: 'button',
                props: {
                  style: '',
                  class: 'ray-button button___8GjIZ',
                  'hover-class': 'button-hover___32oF-',
                  bindtap: '$$REMAX_METHOD_18_onClick',
                  disabled: false,
                  type: 'default',
                  hoverStyle: 'opacity:0.8;',
                  'hover-start-time': 20,
                  'hover-stay-time': 70,
                  size: 'default',
                  loading: false,
                  'hover-stop-propagation': false,
                },
                children: [17],
                nodes: { '17': { id: 17, type: 'plain-text', text: '手动切换' } },
              },
            },
          },
        },
      },
      modalRoot: { children: [] },
    }

    let b = {
      root: {
        nodes: {
          '19': {
            nodes: {
              '16': {
                nodes: {
                  '11': { nodes: { '10': { props: { style: 'background-color:#CAC7E5;' } } } },
                  '13': { nodes: { '12': { props: { style: 'background-color:#29AF34;' } } } },
                  '15': { nodes: { '14': { props: { style: 'background-color:#0CF020;' } } } },
                },
              },
            },
          },
        },
      },
      modalRoot: { children: [] },
    }

    let result = {
      root: {
        children: [7, 9, 19],
        nodes: {
          '7': {
            id: 7,
            type: 'view',
            props: {
              class: 'ray-view wrapper___ftxO_',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [4, 6],
            nodes: {
              '4': {
                id: 4,
                type: 'text',
                props: { class: 'title___2oZYd', 'user-select': false, decode: false },
                children: [3],
                nodes: { '3': { id: 3, type: 'plain-text', text: 'Swiper' } },
              },
              '6': {
                id: 6,
                type: 'text',
                props: { class: 'desc___1sf9t', 'user-select': false, decode: false },
                children: [5],
                nodes: { '5': { id: 5, type: 'plain-text', text: '滑块视图容器' } },
              },
            },
          },
          '9': {
            id: 9,
            type: 'view',
            props: {
              class: 'ray-view title___3qe1V',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              textStyle: 'title___3qe1V',
              'hover-stop-propagation': false,
            },
            children: [8],
            nodes: { '8': { id: 8, type: 'plain-text', text: '受控模式' } },
          },
          '19': {
            id: 19,
            type: 'view',
            props: {
              class: 'ray-view demo___1ZEg-',
              style: '',
              'hover-class': '',
              'hover-start-time': 20,
              'hover-stay-time': 70,
              'hover-stop-propagation': false,
            },
            children: [16, 18],
            nodes: {
              '16': {
                id: 16,
                type: 'swiper',
                props: {
                  style: '',
                  class: 'ray-swiper swiper___GuUkC',
                  bindchange: '$$REMAX_METHOD_16_onChange',
                  bindanimationfinish: '$$REMAX_METHOD_16_onAnimationFinish',
                  current: 0,
                  autoplay: false,
                  circular: false,
                  duration: 500,
                  interval: 5000,
                  vertical: false,
                  'indicator-active-color': '#000',
                  'indicator-color': 'rgba(0,0,0,0.3)',
                  'indicator-dots': true,
                  'previous-margin': '0px',
                  'next-margin': '0px',
                  'display-multiple-items': 1,
                },
                children: [11, 13, 15],
                nodes: {
                  '11': {
                    id: 11,
                    type: 'swiper-item',
                    props: {},
                    children: [10],
                    nodes: {
                      '10': {
                        id: 10,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#CAC7E5;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '13': {
                    id: 13,
                    type: 'swiper-item',
                    props: {},
                    children: [12],
                    nodes: {
                      '12': {
                        id: 12,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#29AF34;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                  '15': {
                    id: 15,
                    type: 'swiper-item',
                    props: {},
                    children: [14],
                    nodes: {
                      '14': {
                        id: 14,
                        type: 'view',
                        props: {
                          class: 'ray-view swiperItem___378Mj',
                          style: 'background-color:#0CF020;',
                          'hover-class': '',
                          'hover-start-time': 20,
                          'hover-stay-time': 70,
                          'hover-stop-propagation': false,
                        },
                        children: [],
                      },
                    },
                  },
                },
              },
              '18': {
                id: 18,
                type: 'button',
                props: {
                  style: '',
                  class: 'ray-button button___8GjIZ',
                  'hover-class': 'button-hover___32oF-',
                  bindtap: '$$REMAX_METHOD_18_onClick',
                  disabled: false,
                  type: 'default',
                  hoverStyle: 'opacity:0.8;',
                  'hover-start-time': 20,
                  'hover-stay-time': 70,
                  size: 'default',
                  loading: false,
                  'hover-stop-propagation': false,
                },
                children: [17],
                nodes: { '17': { id: 17, type: 'plain-text', text: '手动切换' } },
              },
            },
          },
        },
      },
      modalRoot: { children: [] },
    }
    let res = smartAssign(a, b)

    expect(res).toEqual(result)
  })
})
