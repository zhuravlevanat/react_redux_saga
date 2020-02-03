const matrix = {
    colors: {
        color_01: '#C8F3F3',
        color_02: '#6EDCDC',
        color_03: '#117d7d',
        color_04: '#CB152B',
        color_05: '#FDE5D1',
        color_06: '#104949',
        color_07: '#FDBA82',
        color_08: 'rgba(244,209,156,0.89)',
        color_09: '#ffb1aa',
        color_10: '#9affa5',
        color_11: '#000',
        color_12: '#fff',
    },
    transparent: 'transparent',
};

const metric = {
    mainWidth: '800px',
    contentHeight: '640px',
    borderRadius: '5px',
};

const fonts = {
    main: 'Trebuchet MS',
};

export default {
    rootModule: {
        bgColor: matrix.colors.color_01,
    },
    loginModule: {
        containerWidth: metric.mainWidth,
        borderRadius: metric.borderRadius,
        font: fonts.main,
        bgColor: matrix.colors.color_02,
        borderColor: matrix.colors.color_03,
        textColor: matrix.colors.color_06,
        inputBgColor: matrix.colors.color_01,
        buttonBorderColor: matrix.transparent,
        buttonBgColor: matrix.colors.color_06,
        buttonTextColor: matrix.colors.color_01,
    },
    mainModule: {
        containerWidth: metric.mainWidth,
        borderRadius: metric.borderRadius,
        bgColor: matrix.colors.color_02,
        borderColor: matrix.colors.color_03,
    },
    headerModule: {
        borderRadius: metric.borderRadius,
        bgColor: matrix.colors.color_08,
        logoutBgColor: matrix.colors.color_02,
        logoutBorderColor: matrix.colors.color_07,
        logoutTextColor: matrix.colors.color_06,
        buttonTextColor: matrix.colors.color_06,
        buttonBgColor: matrix.colors.color_02,
        buttonBorderRadius: metric.borderRadius,
        buttonFont: fonts.main,
        buttonFontWeight: 700,
        buttonBorder: 'none',
    },
    tabsetModule: {
        buttonBgColor: matrix.colors.color_03,
        buttonTextColor: matrix.colors.color_02,
        buttonHoverBgColor: matrix.colors.color_02,
        buttonHoverTextColor: matrix.colors.color_03,
        buttonActiveBgColor: matrix.colors.color_02,
        buttonActiveTextColor: matrix.colors.color_03,
    },
    editMainModule: {
        contentHeight: metric.contentHeight,
    },
    listPageModule: {
        font: fonts.main,
        borderRadius: metric.borderRadius,
        listElemBgColor: matrix.colors.color_01,
        listElemBorderColor: matrix.colors.color_07,
        listElemTextColor: matrix.colors.color_06,
        buttonTextColor: matrix.colors.color_06,
        buttonBgColor: matrix.colors.color_08,
        buttonBorderRadius: metric.borderRadius,
        buttonFont: fonts.main,
    },
    editModule: {
        font: fonts.main,
        labelTextColor: matrix.colors.color_06,
        buttonTextColor: matrix.colors.color_02,
        buttonBgColor: matrix.colors.color_03,
        buttonBorderRadius: metric.borderRadius,
        buttonFont: fonts.main,
    },
    logTableModule: {
        tabHeaderFont: fonts.main,
        tabHeaderBorderColor: matrix.colors.color_06,
        tabHeaderBgColor: matrix.colors.color_03,
        tabHeaderTextColor: matrix.colors.color_02,
        cellFont: fonts.main,
        cellBorderColor: matrix.colors.color_06,
        cellBgColor: matrix.colors.color_12,
        cellTextColor: matrix.colors.color_11,
    },
    modalModule: {

            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',

        font: fonts.main,
        labelTextColor: matrix.colors.color_06,
        buttonTextColor: matrix.colors.color_02,
        buttonBgColor: matrix.colors.color_03,
        buttonBorder: `1px solid ${matrix.colors.color_06}`,
        buttonBorderRadius: metric.borderRadius,
        buttonFont: fonts.main,
        bgColor: matrix.colors.color_08,


    },
};