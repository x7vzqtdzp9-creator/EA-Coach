import { trpc } from "@/lib/trpc";

export default function AdminBlog() {
  const utils = trpc.useUtils();

  const { data: posts } = trpc.blog.adminList.useQuery();

  const togglePublish = trpc.blog.update.useMutation({
    onSuccess: () => {
      utils.blog.adminList.invalidate();
    },
  });

  if (!posts) return null;

  return (
    <div>
      <h1>Admin Blog</h1>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>

          <button
            onClick={() =>
              togglePublish.mutate({
                id: post.id,
                title: post.title,
                content: post.content,
                excerpt: post.excerpt ?? undefined,
                category: post.category ?? undefined,
                coverImage: post.coverImage ?? undefined,
                published: !post.published,
              })
            }
          >
            {post.published ? "Dépublier" : "Publier"}
          </button>
        </div>
      ))}
    </div>
  );
}