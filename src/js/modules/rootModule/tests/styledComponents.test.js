import {
    Text,
    Wrapper,
    TextsBlock,
} from '../styledComponents';

describe('RootModule styled components', () => {
    const theme = {
        textColor: 'textColor',
    };

    it('Text should have correct styles', () => {
        const component = shallowRender(<Text/>);

        expect(component).toHaveStyleRule('color', '#111111');
        expect(component).toHaveStyleRule('font-weight', 'bold');
    });

    it('Wrapper.testText should have correct styles', () => {
        const component = shallowRender(<Wrapper.testText/>);

        expect(component).toHaveStyleRule('color', '#999999');
        expect(component).toHaveStyleRule('font-weight', 'bold');
        expect(component).toHaveStyleRule('font-size', '20px');
    });

    it('TextsBlock should have correct styles', () => {
        const component = shallowRender(<TextsBlock/>);

        expect(component).toHaveStyleRule('display', 'flex');
        expect(component).toHaveStyleRule('flex-direction', 'column');
    });

    it('TextsBlock.firstText should have correct styles', () => {
        const component = shallowRender(<TextsBlock.firstText/>);

        expect(component).toHaveStyleRule('color', '#006600');
        expect(component).toHaveStyleRule('font-weight', 'bold');
    });

    it('TextsBlock.secondText should have correct styles', () => {
        const component = shallowRender(<TextsBlock.secondText theme={theme} />);

        expect(component).toHaveStyleRule('color', 'textColor');
        expect(component).toHaveStyleRule('font-weight', 'bold');
    });
});
