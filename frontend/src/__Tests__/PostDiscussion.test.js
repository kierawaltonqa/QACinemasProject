//import PostDiscussion from '../Components/Discussion/PostDiscussion';
import { create } from 'react-test-renderer';
import EachPost from '../Components/Discussion/EachPost';


describe(`Post Discussion Testing`, () => {

    const item = {
        name: 'frank',
        movie: 'RED',
        topic: 'Old',
        discussion: 'This is an older film, but it is still really good',
        rating: 7
    }

    let componentToTest;

    beforeEach(() => {
        const TestInstance = create(<EachPost item={item} />);
        componentToTest = TestInstance.root;

    });

    it(`should render a card with the name Frank`, () => {
        const h5 = componentToTest.findByType(`h5`);
        console.log(item.name);
        expect(h5.children[0]).toEqual(item.name);
    });

    it(`should render the movie title of the discussion`, () => {
        const p1 = componentToTest.findAllByType('p')[1];
        console.log(p1.children);
        expect(p1.children).toEqual([item.movie]);
    })

    it(`should render the topic of the discussion`, () => {
        const p3 = componentToTest.findAllByType('p')[3];
        console.log(p3.children);
        expect(p3.children).toEqual([item.topic]);
    })

    it(`should render the discussion of the discussion`, () => {
        const p5 = componentToTest.findAllByType('p')[5];
        console.log(p5.children);
        expect(p5.children).toEqual([item.discussion]);
    })

    it(`should render the rating of the discussion`, () => {
        const p6 = componentToTest.findAllByType('p')[6];
        console.log(p6.children[1]);
        expect(p6.children[1]).toContain([item.rating]);
    })

    it(`should match the snapshot`, () => {
        const instance = create(<EachPost item={item} />).toJSON();
        expect(instance).toMatchSnapshot();
    })


})