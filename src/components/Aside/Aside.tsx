import React, {useMemo} from 'react';
import classes from './aside.module.scss';
import {dialogTypes} from "../../types";
import Dialogs from "../Dialogs/Dialogs";

type AsideProps = {
    dialogs: dialogTypes[]
}

const Aside:React.FC<AsideProps> = ({dialogs}) => {
    const dialogsItems = useMemo(() => dialogs, [dialogs]);

    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>Чаты</h2>
            <Dialogs dialogs={dialogsItems} />
        </aside>
    );
};

export default React.memo(Aside);