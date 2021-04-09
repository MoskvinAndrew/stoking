export const mockMenuItems = [
    {
        id: 100,
        name: "Автоматика",
        link: "/parentLink1/",
        slug: "/parentLink1/",
        selected: true,
        attach: "/assets/img/icons/avtomatika.png",
        items: [
            {
                id: 1001,
                name: "Клапаны",
                link: "/parentLink1/",
                slug: "/parentLink1/",
                children: [
                    {id: 10001, name: "child1", slug: "/childLink/", link: "/childLink/"},
                    {id: 10002, name: "child2", slug: "/childLink2/", link: "/childLink2/"},
                    {id: 10003, name: "child3", slug: "/childLink3/", link: "/childLink3/"},
                ]
            },
            {
                id: 1002,
                name: "Трубопроводная арматура",
                link: "/parentLink1/",
                slug: "/parentLink2/",
                children: [
                    {id: 20001, name: "child1", slug: "/childLink/", link: "/childLink/"},
                    {id: 20002, name: "child2", slug: "/childLink2/", link: "/childLink2/"},
                    {id: 20003, name: "child3", slug: "/childLink3/", link: "/childLink3/"},
                ]
            },
        ]
    },
    {
        id: 200,
        name: "Насосное оборудование",
        link: "/parentLink1/",
        slug: "/parentLink1/",
        selected: false,
        attach: "/assets/img/icons/nasos-oborud.png",
        items: [
            {
                id: 1001,
                name: "Какой то насос",
                link: "/parentLink1/",
                slug: "/parentLink1/",
                children: [
                    {id: 1001, name: "child1", slug: "/childLink/", link: "/childLink/"},
                    {id: 1002, name: "child2", slug: "/childLink2/", link: "/childLink2/"},
                    {id: 1003, name: "child3", slug: "/childLink3/", link: "/childLink3/"},
                ]
            },
            {
                id: 1002,
                name: "еще Какой то насос",
                link: "/parentLink1/",
                slug: "/parentLink2/",
                children: [
                    {id: 2001, name: "child1", slug: "/childLink/", link: "/childLink/"},
                    {id: 2002, name: "child2", slug: "/childLink2/", link: "/childLink2/"},
                    {id: 2003, name: "child3", slug: "/childLink3/", link: "/childLink3/"},
                ]
            },
        ]
    }
];