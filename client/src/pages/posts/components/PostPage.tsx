import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../Posts";
import { format } from "date-fns";
import classes from "./PostPage.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostPage: React.FC = () => {
  const { id } = useParams();
  const userId = useSelector(
    (state: {
      Session: {
        userId: string;
      };
    }) => state.Session.userId
  );
  const [data, setData] = useState<postsData | null>();
  const [fetchState, setFetchState] = useState<{
    error: boolean;
    isLoading: boolean;
  }>({
    error: false,
    isLoading: true,
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setData(null);
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "GET",
        });
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        setData(data[0]);
        console.log(data)
        setFetchState({
          error: false,
          isLoading: false,
        });
      } catch (error: any) {
        setFetchState({
          error: true,
          isLoading: false,
        });
      }
    };
    fetchPost();
  }, [id]);
  return (
    <main>
      {fetchState.isLoading && <p>Loading</p>}
      {!fetchState.isLoading && (
        <>
          {userId === data!.author._id && (
            <Link to={`/posts/edit/${id}`}>Edit</Link>
          )}
          <div className={classes.picture}>
            <img
              alt="image"
              src={"http://localhost:3000/" + data!.cover.replace("src/", "")}
            />
          </div>
          <div className={classes.details}>
            <h2>{data!.title}</h2>
            <h6>
              {data!.author.name} at
              {format(new Date(data!.createdAt), "MMM d, yyyy HH:mm")}
            </h6>
            <p dangerouslySetInnerHTML={{ __html: data!.content }} />
          </div>
        </>
      )}
    </main>
  );
};

export default PostPage;
