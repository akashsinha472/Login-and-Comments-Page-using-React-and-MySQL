import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  items: [],
};
const Home = () => {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
        <div className="cent"><h2><strong>Discussion Page</strong></h2></div>
        <div>
        <strong>BLOGS</strong>
        </div>
    <div className="padding1">
    <div className="padding2"><h4>Comments Section</h4></div>
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
    </div>
  );
};

export default Home;