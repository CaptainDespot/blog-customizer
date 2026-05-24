import { useState, CSSProperties } from 'react';
import { Article } from './components/article';
import { ArticleParamsForm } from './components/article-params-form';
import {
    ArticleStateType,
    defaultArticleState,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

export const App = () => {
    const [articleState, setArticleState] =
        useState<ArticleStateType>(defaultArticleState);

    const handleApply = (newState: ArticleStateType) => setArticleState(newState);
    const handleReset = () => setArticleState(defaultArticleState);

    // Формируем объект стилей с CSS-переменными для контейнера
    const customStyles = {
        '--font-family': articleState.fontFamilyOption.value,
        '--font-size': articleState.fontSizeOption.value,
        '--font-color': articleState.fontColor.value,
        '--container-width': articleState.contentWidth.value,
        '--bg-color': articleState.backgroundColor.value,
    } as CSSProperties;

    return (
        <main className={styles.main} style={customStyles}>
            <ArticleParamsForm
                currentState={articleState}
                onApply={handleApply}
                onReset={handleReset}
            />
            <Article />
        </main>
    );
};