import { Search } from '@/assets';
import Button from '@/components/ui/Button';
import { cn } from '@/utils';

import styles from './SearchBar.module.scss';

type TProps = {
    className?: string;
    placeholder?: string;
    buttonLabel?: string;
    defaultValue?: string;
};

const SearchBar = ({
    className,
    placeholder = 'Search by job title, role, skills, or location',
    buttonLabel = 'Search jobs',
    defaultValue = '',
}: TProps) => {
    // TODO: Replace this static form with URL/query-state search once API filtering is integrated.
    return (
        <form className={cn(styles.form, className)} action="#" role="search">
            <label className={styles.inputWrapper} htmlFor="job-search">
                <Search className={styles.searchIcon} width={20} height={20} aria-hidden />
                <input
                    id="job-search"
                    className={styles.input}
                    name="keyword"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            </label>
            <Button type="button">{buttonLabel}</Button>
        </form>
    );
};

export default SearchBar;
