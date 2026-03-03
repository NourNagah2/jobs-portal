import JobBoardSection from '@/components/job-board/JobBoardSection';
import { mockJobPosts } from '@/mocks';

const HomePage = () => {
    return <JobBoardSection jobs={mockJobPosts} />;
};

export default HomePage;
