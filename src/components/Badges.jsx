const Badge = ({ className: color, children: name }) => {
    return <span className={`px-3 py-1 rounded-xl ${color} text-sm text-white`}>{name}</span>
}

export const RustBadge = () => <Badge className="bg-amber-600">Rust</Badge>

export const KotlinBadge = () => <Badge className="bg-purple-600">Kotlin</Badge>

export const JavaFXBadge = () => <Badge className="bg-amber-500">JavaFX</Badge>

export const JavaBadge = () => <Badge className="bg-amber-500">Java</Badge>

export const CSSBadge = () => <Badge className="bg-blue-500">CSS</Badge>

export const SCSSBadge = () => <Badge className="bg-purple-700">SCSS</Badge>

export const AmazonAWSBadge = () => <Badge className="bg-amber-500">Amazon AWS</Badge>

export const TypeScriptBadge = () => <Badge className="bg-blue-700">TypeScript</Badge>

export const HTMLBadge = () => <Badge className="bg-orange-500">HTML</Badge>

export const SvelteBadge = () => <Badge className="bg-red-500">Svelte</Badge>
