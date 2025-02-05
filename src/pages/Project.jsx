const Project = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm h-full flex flex-col justify-center items-center sticky top-4 mt-4">
      <div className="max-h-[400px] max-w-[300px] overflow-auto">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgcng9IjIwIiBmaWxsPSIjRjVGNUY1IiAvPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAsIDUwKSI+CiAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIHJ4PSIyMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjRTBFMEUwIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAsIDUwKSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9IjUwIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMzMzMyI+WW91ciBtYWluIGhlYWRsaW5lIGhlcmUhPC90ZXh0PgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZGNUQ5IiAvPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLCA3NSkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIGZpbGw9IiNGRkMxMDciIC8+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD0iMjUiIHk9IjMwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGRkZGIj5Mb2dvPC90ZXh0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          alt="Brand Preview"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="text-gray-700 font-semibold mt-4">Your branding is here!</p>
    </div>
  );
};

export default Project;
