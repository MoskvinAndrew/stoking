import React from 'react';
import css from  "./MenuContentItem.module.scss";

type ChildrenItemType = {
    name: string
    link: string
}
type MenuContentItemType = {
    childrenTitle: string
    childrenItems: Array<ChildrenItemType>
}

export const MenuContentItem: React.FC<MenuContentItemType> = (props) => {
    const {
        childrenTitle,
        childrenItems
    } = props;

    const items = Array.isArray(childrenItems) && childrenItems.map(
        (item: ChildrenItemType, index: number) =>
            <li key={index} className={css.childItem}>
                <a href="#" data-href={item.link} className={css.childItemLink}>{item.name}</a>
            </li>
    );

    return (
        <div className={css.childInner}>
            <p><strong>{childrenTitle}</strong></p>
            <ul className={css.childList}>
                {items}
            </ul>
        </div>
    )
};
