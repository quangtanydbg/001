import { WorkItem, ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Video thương mại và quảng cáo",
    description: "Nhắm mục tiêu truyền thông sắc bén. Chúng tôi sản xuất các thước phim quảng cáo sản phẩm, dịch vụ với góc máy điện ảnh và thông điệp lay động lòng người.",
    details: ["Quảng cáo sản phẩm", "Social media ads", "Thước phim định vị thương hiệu", "Creative storytelling"]
  },
  {
    id: "02",
    title: "TVC Doanh Nghiệp",
    description: "Giúp doanh nghiệp kể câu chuyện hành trình, tầm nhìn và sứ mệnh một cách đầy cảm xúc, nâng cao uy tín và tạo ấn tượng mạnh mẽ cho đối tác.",
    details: ["Hồ sơ doanh nghiệp dạng video", "Phóng sự nội bộ", "Giới thiệu văn phòng & nhà máy", "Kỷ niệm ngày thành lập"]
  },
  {
    id: "03",
    title: "Wedding Film",
    description: "Nhịp đập của hạnh phúc được thu trọn qua từng khung hình ấm áp. Phong cách của chúng tôi lãng mạn, sang trọng, tập trung vào khoảnh khắc chân thực nhất.",
    details: ["Phóng sự cưới (Pre-wedding)", "Sự kiện ngày cưới chính thức", "Cinematic wedding highlight", "Story-driven wedding trailer"]
  },
  {
    id: "04",
    title: "Event Film",
    description: "Không bỏ lỡ những khoảnh khắc bùng nổ. Ghi lại trọn vẹn không khí, cảm xúc của liveshow, hội thảo, buổi ra mắt sản phẩm một cách chuyên nghiệp nhất.",
    details: ["Sự kiện âm nhạc & festival", "Hội nghị & workshop doanh nghiệp", "Lễ ra mắt dòng sản phẩm mới", "High-energy recap recap"]
  },
  {
    id: "05",
    title: "Tiktok/ Youtube",
    description: "Tạo nội dung bắt trend, giữ chân người xem cao nhờ nhịp dựng lôi cuốn (fast-paced) và kỹ xảo hiệu ứng bắt mắt phù hợp nền tảng số.",
    details: ["Video ngắn viral TikTok/Reels/Shorts", "Vlog hành trình/YouTube content", "Reviewer & talkshow sản phẩm", "Ký sự điện ảnh ngắn"]
  },
  {
    id: "06",
    title: "Sản xuất trọn gói",
    description: "Đồng hành từ khâu lên ý tưởng, viết kịch bản, quay phim cho đến hậu kỳ hoàn chỉnh để mang lại sản phẩm đồng bộ nhất cho chiến dịch của bạn.",
    details: ["Phát triển ý tưởng kịch bản", "Tìm kiếm địa điểm & diễn viên", "Quay phim hiện trường full-crew", "Dựng phim, chỉnh màu, SFX"]
  }
];

export const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: "Hỷ Lễ Canh Ba",
    category: "WEDDING FILM",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-bride-and-groom-on-their-wedding-day-34440-large.mp4",
    duration: "03:15",
    description: "Bức tranh cưới mang âm hưởng truyền thống Á Đông đầy ma mị và thiêng liêng. Từng sắc đỏ của đèn lồng kết duyên cùng thanh âm cổ kính đưa người xem vào một không gian rực rỡ cảm xúc.",
    year: "2025",
    client: "Minh Quân & Thùy Dung",
    credits: "Director: Quang Tan | DOP: Hoang Nam | Colorist: Quang Tan"
  },
  {
    id: 2,
    title: "Future Contact - Honor Premium",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-holding-a-glowing-smartphone-in-dark-41775-large.mp4",
    duration: "01:00",
    description: "Quảng cáo dòng điện thoại cao cấp với phong cách viễn tưởng Cyberpunk tối giản. Ánh sáng neon xanh tương lai làm nổi bật thiết kế màn hình vô cực đầy ấn tượng.",
    year: "2026",
    client: "Honor Vietnam",
    credits: "Concept & Edit: Quang Tan | VFX: Minh Khang"
  },
  {
    id: 3,
    title: "NuVi Sữa Lúa Mạch - Năng Lượng Đột Phá",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-smiling-children-jumping-with-energy-41901-large.mp4",
    duration: "00:45",
    description: "Chiến dịch quảng cáo đầy màu sắc và năng lượng tươi vui dành cho trẻ em. Kết hợp hoạt ảnh 3D ngộ nghĩnh cùng các pha hành tinh kỳ thú kích thích trí tưởng tượng.",
    year: "2025",
    client: "Nutifood Vietnam",
    credits: "CGI Team: AnimStudio | Post-Production: Quang Tan"
  },
  {
    id: 4,
    title: "Honor Magic - Chạm Vào Kỳ Quan",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rotating-photorealistic-smartphone-render-42790-large.mp4",
    duration: "01:20",
    description: "Mãn nhãn với các chi tiết cơ khí siêu thực của camera mặt lưng vàng ánh kim. Đoạn phim nhấn mạnh vào đỉnh cao công nghệ chụp đêm tựa mặt trăng khổng lồ tuyệt đẹp.",
    year: "2026",
    client: "Honor Global",
    credits: "Edit & SFX: Quang Tan | 3D Asset: Studio Alpha"
  },
  {
    id: 5,
    title: "Vương Quốc Sáng Tạo - FPT Shop Tết",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-handmade-clay-figures-animating-on-screen-41710-large.mp4",
    duration: "01:30",
    description: "Biến FPT Shop thành một thế giới xưởng đồ chơi đất sét rực rỡ, ấm cúng. Nơi các chú robot nhỏ cùng nhau sửa chữa máy móc chuẩn bị quà Tết công nghệ trao tay.",
    year: "2025",
    client: "FPT Retail",
    credits: "Creative Director: Hoang Dang | Clay Animation & Edit: Quang Tan"
  },
  {
    id: 6,
    title: "TÂN BLING - FPT Dance Arena",
    category: "REEL - TIKTOK",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-dancers-performing-choreography-in-street-41221-large.mp4",
    duration: "00:30",
    description: "Nhịp điệu dồn dập, chuyển cảnh siêu tốc cuốn người xem qua vũ điệu đường phố trẻ trung trước tòa nhà chọc trời lung linh ánh đèn LED xanh dương thương hiệu.",
    year: "2026",
    client: "FPT Telecom Collective",
    credits: "DOP & Editor: Quang Tan | Choreographer: Soul Dance Studio"
  },
  {
    id: 7,
    title: "Yêu Thương Gần Hơn - Khoảnh Khắc Gia Đình",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-happy-couple-laughing-together-at-home-43282-large.mp4",
    duration: "01:15",
    description: "Góc quay nhẹ nhàng, ấm áp đong đầy hơi thở gia đình. Quảng cáo truyền tải trọn vẹn sự rung cảm ngọt ngào khi cặp đôi nhận được lời nhắn kết nối ấm áp từ người thân.",
    year: "2025",
    client: "Vietcombank Vietnam",
    credits: "Director & Editor: Quang Tan | Lighting: Thinh Phat"
  },
  {
    id: 8,
    title: "Vô Nhân - Tĩnh Lặng Trên Đỉnh Đại Ngàn",
    category: "YOUTUBE",
    thumbnail: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-misty-forest-and-mountains-23466-large.mp4",
    duration: "05:40",
    description: "Phim phóng sự nghệ thuật bằng flycam đạt độ phân giải cực cao. Thước phim ghi lại pho tượng Phật khổng lồ linh thiêng ẩn hiện giữa biển mây bạt ngàn của đỉnh Tà Xùa.",
    year: "2024",
    client: "Kênh Du Hành Việt Nam",
    credits: "Cinematographer: Quang Tan | Music Composer: Kiet Anh"
  },
  {
    id: 9,
    title: "ICARUS-7: Chuyến Bay Cuối Cùng",
    category: "YOUTUBE",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flight-through-deep-star-nebula-in-space-31718-large.mp4",
    duration: "04:20",
    description: "Video VFX sci-fi giới thiệu cốt truyện hư cấu phi thuyền Icarus-7 đi sâu vào lõi hố đen. Trải nghiệm kịch tính với âm thanh không gian đa hướng chân thực.",
    year: "2025",
    client: "Personal Creative Project",
    credits: "Directed, Rendered & Sound Design: Quang Tan"
  },
  {
    id: 10,
    title: "Samurai Shodown - Kiếm Sĩ Cô Độc",
    category: "REEL - TIKTOK",
    thumbnail: "https://images.unsplash.com/photo-1547891306-7a8f421223a4?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-with-a-japanese-samurai-sword-training-slow-motion-41800-large.mp4",
    duration: "00:45",
    description: "Video ngắn triệu view trên TikTok tôn vinh tinh hoa kiếm đạo Nhật Bản. Sắc đỏ hoàng hôn rực lửa kết hợp kỹ thuật rượt camera hành động mượt mà ấn tượng.",
    year: "2026",
    client: "VNG Games Joint Stock",
    credits: "Director & Colorist: Quang Tan | Action Actor: Long Vuong"
  },
  {
    id: 11,
    title: "The Faceless Son - Đêm Mưa Hà Nội",
    category: "EVENT FILM",
    thumbnail: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-lonely-man-walking-in-the-rain-at-night-42220-large.mp4",
    duration: "02:50",
    description: "Phim tư liệu ngắn hậu trường liveshow âm nhạc đình đám. Không gian u tối, bí ẩn ẩn trong các cơn mưa trút xuống sân khấu hòa cùng ánh đèn pha quét rực rỡ.",
    year: "2024",
    client: "SpaceSpeakers Group",
    credits: "Videographer: Quang Tan | Assistant: Thanh Liem"
  },
  {
    id: 12,
    title: "Ngọn Lửa Kiên Cường - Hero In Red",
    category: "EVENT FILM",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fireworks-bursting-in-the-night-sky-42407-large.mp4",
    duration: "03:00",
    description: "Thước phim hoành tráng tái hiện nỗ lực cứu hộ xúc động giữa tâm bão lửa. Câu chuyện tôn vinh những anh hùng cứu hỏa thầm lặng trong trang phục màu đỏ cờ Tổ quốc.",
    year: "2025",
    client: "Hanoi Fire Department Memorial",
    credits: "DOP & Editor: Quang Tan | Pyrotechnics: Kim Long"
  },
  {
    id: 13,
    title: "Elephant's Windy Adventure",
    category: "YOUTUBE",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-children-watching-a-soft-animated-cartoon-show-video-41716-large.mp4",
    duration: "02:10",
    description: "Bộ phim dựng hình 3D hoạt họa dễ thương kể về chú voi đồ chơi rong ruổi qua thung lũng lộng gió. Phù hợp trào lưu ASMR thư giãn thị giác nổi tiếng thế giới.",
    year: "2025",
    client: "Lullaby Kids Group",
    credits: "CGI & Color Grading: Quang Tan | Sound FX: Lam Ngoc"
  },
  {
    id: 14,
    title: "Summer Vibes - Bản Tình Ca Nắng Ấm",
    category: "WEDDING FILM",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sensual-bride-model-posing-in-white-dress-34446-large.mp4",
    duration: "02:30",
    description: "Khung hình ngập tràn sắc vàng mơ của nắng hè Đà Lạt. Nàng thơ dịu dàng trong tà váy trắng tinh khôi dạo bước dưới tán rừng thông rì rào thơ mộng.",
    year: "2025",
    client: "Nari Wedding & Studio House",
    credits: "DOP & Editor: Quang Tan | Stylist: Quynh Chi"
  },
  {
    id: 15,
    title: "Whisper of Bloom - Lạc Vào Địa Đàng",
    category: "EVENT FILM",
    thumbnail: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-manor-garden-42617-large.mp4",
    duration: "03:40",
    description: "Góc máy di chuyển chậm rãi qua những mê cung cây xanh kỳ bí của lâu đài cổ, tái hiện rực rỡ buổi tiệc thời trang dạ hội mang đậm chất châu Âu cổ điển.",
    year: "2024",
    client: "Gia Le Couture Fashion Show",
    credits: "Drone Operator & Film Editor: Quang Tan"
  },
  {
    id: 16,
    title: "NEO POP - Bãi Cát Hồng",
    category: "REEL - TIKTOK",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-on-a-sandy-beach-during-sunset-34351-large.mp4",
    duration: "00:15",
    description: "Concept siêu thực với tượng voi khổng lồ màu hồng pastel lơ lửng trên biển. Thiết kế khung hình vuông nịnh mắt phù hợp tối đa cho Instagram Reels và Tiktok.",
    year: "2026",
    client: "MonoArt Studio",
    credits: "Creative Director: Quang Tan | 3D Integration: Nam Anh"
  },
  {
    id: 17,
    title: "The Tim Burton Puppets Tribute",
    category: "YOUTUBE",
    thumbnail: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-closeup-of-scary-stop-motion-puppets-making-faces-41712-large.mp4",
    duration: "03:50",
    description: "Phim hoạt hình tĩnh (stop-motion) kỳ công bằng búp bê may vá thủ công. Tạo nên bầu không khí cổ tích buồn, ma mị đặc trưng tri ân huyền thoại Tim Burton.",
    year: "2025",
    client: "Hanoi Academy of Arts Showcase",
    credits: "Puppeteers: ArtGroup | Director of Photography & Editor: Quang Tan"
  },
  {
    id: 18,
    title: "MSI Modern Laptop - Kiến Tạo Đỉnh Cao",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-peacefully-on-laptop-at-modern-home-43288-large.mp4",
    duration: "01:00",
    description: "Quảng cáo phong cách tối giản tập trung vào người dùng làm việc tại nhà. Chú trọng màu sáng rực rỡ, gọn gàng truyền cảm hứng tự do làm việc mọi lúc mọi nơi.",
    year: "2026",
    client: "MSI Vietnam Partner",
    credits: "Director & Editor: Quang Tan | Actor: Minh Duy"
  },
  {
    id: 19,
    title: "Nước Khoáng Xanh - Sảng Khoái Tự Nhiên",
    category: "TVC",
    thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-drinking-fresh-water-after-working-out-43029-large.mp4",
    duration: "00:30",
    description: "Quay dựng với tốc độ khung hình siêu cao (high frame-rate super slow motion) ghi lại giọt nước giăng tràn sảng khoái mát lạnh xóa tan nắng hè oi bức.",
    year: "2025",
    client: "Lavie Green Vietnam",
    credits: "Cinematographer: Quang Tan | Liquid SFX: Studio Water"
  }
];
