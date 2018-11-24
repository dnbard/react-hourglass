// import { v4 as uuid } from 'uuid';

export default [{
    id: 1,
    title: 'Sci-fi',
    children: [ 2, 3 ],
    parent: [ ]
}, {
    id: 2,
    title: 'Back to the Future',
    children: [ 4, 5, 6 ],
    parent: [ 1 ]
}, {
    id: 3,
    title: 'Star Wars',
    children: [ 7, 8, 9 ],
    parent: [ 1 ]
}, {
    id: 4,
    title: 'Movie 1',
    children: [  ],
    parent: [ 2 ]
}, {
    id: 5,
    title: 'Movie 2',
    children: [  ],
    parent: [ 2 ]
}, {
    id: 6,
    title: 'Movie 3',
    children: [  ],
    parent: [ 2 ]
}, {
    id: 7,
    title: 'New Hope',
    children: [  ],
    parent: [ 3 ]
}, {
    id: 8,
    title: 'Empire Strikes Back',
    children: [  ],
    parent: [ 3 ]
}, {
    id: 9,
    title: 'Return of the Jedi',
    children: [  ],
    parent: [ 3 ]
}];
