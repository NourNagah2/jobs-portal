import { Plus, Search } from '@/assets';
import Button from '@/components/ui/Button';

import styles from './SearchBar.module.scss';

type TProps = {
    placeholder: string;
    postJobLabel: string;
};

const SearchBar = ({ placeholder, postJobLabel }: TProps) => {
    // TODO: Wire the input to live query params and backend filtering.
    // TODO: Hook post button to the real create-job flow.
    return (
        <form className={styles.form} action="#" role="search">
            <label className={styles.inputWrapper} htmlFor="job-search">
                <Search className={styles.searchIcon} width={20} height={20} aria-hidden />
                <input id="job-search" className={styles.input} name="keyword" placeholder={placeholder} />
            </label>
            <Button type="button" variant="primary" leftIcon={<Plus aria-hidden />}>
                {postJobLabel}
            </Button>
        </form>
    );
};

export default SearchBar;
