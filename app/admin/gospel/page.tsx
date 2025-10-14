import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

export default function AdminGospelPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-serif">Gospel Content</h1>
          <p className="text-muted-foreground">Manage articles, devotionals, and teachings</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Content
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Content</CardTitle>
              <CardDescription>Browse and manage gospel content</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search content..." className="pl-8 w-64" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 1, title: "The Power of Prayer", category: "Devotional", status: "published", views: 1234 },
              { id: 2, title: "Walking in Faith", category: "Article", status: "published", views: 892 },
              { id: 3, title: "Understanding Grace", category: "Teaching", status: "draft", views: 0 },
            ].map((content) => (
              <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{content.title}</h3>
                    <Badge variant={content.status === "published" ? "default" : "secondary"}>{content.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{content.category}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {content.views} views
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
