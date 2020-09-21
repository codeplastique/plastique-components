import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import PerfectScrollbar from "perfect-scrollbar";
import AfterAttach from "@plastique/core/component/AfterAttach";
import BeforeDetach from "@plastique/core/component/BeforeDetach";

@Reactive(() => {
`<section xmlns:v="http://github.com/codeplastique/plastique" class="Scroll-area">
    <v:slot/>
</section>
`})
class ScrollArea {
    private ps: PerfectScrollbar;

    constructor(
        private readonly useScrollX: boolean = true,
        private readonly useScrollY: boolean = true,
        private readonly scrollPropagation: boolean = true
    ) {}

    @AfterAttach
    private init(): void{
        this.ps = new PerfectScrollbar(this.getElement(), {
            suppressScrollX: !this.useScrollX,
            suppressScrollY: !this.useScrollY,
            wheelPropagation: this.scrollPropagation
        })
    }

    @BeforeDetach
    private destroy(): void{
        this.ps.destroy();
        this.ps = null;
    }

    public scrollTo(x: number, y: number): void{
        this.whenAttached(() => this.getElement().scrollTo(x, y));
    }

    /**
     * scroll to center of point
     * @param x of point
     * @param y of point
     */
    public scrollToCenter(x: number, y: number): void{
        this.whenAttached(() => {
            let area = this.getElement();
            area.scrollTo(x - area.clientWidth / 2, y - area.clientHeight / 2)
        });
    }

    /**
     * get scrollLeft and scrollTop positions
     */
    public getScrollOffsets(): [number, number]{
        let area = this.getElement();
        return [area.scrollLeft, area.scrollTop];
    }

    /**
     * return center point taking into account offsets
     */
    public getCurrentCenterPoint(): [number, number]{
        let area = this.getElement();
        return [area.clientWidth / 2 + area.scrollLeft, area.clientHeight / 2 + area.scrollTop];
    }

    public update(): void{
        if(this.ps)
            this.ps.update();
    }
}
interface ScrollArea extends Component{}
export default ScrollArea;
